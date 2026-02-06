import React, { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';

const API_BASE_URL = 'https://ddb67-fun.vercel.app';

const API_ENDPOINTS = {
  submit: `${API_BASE_URL}/api/submit`,
  checkUsername: `${API_BASE_URL}/api/check-username`,
  checkWallet: `${API_BASE_URL}/api/check-wallet`,
  checkInvitee: `${API_BASE_URL}/api/check-invitee`,
};

type StepState = {
  completed: boolean;
  ts: string | null;
};

type SubmissionSteps = {
  username: StepState;
  tasks: StepState;
  wallet: StepState;
};

export type SubmissionData = {
  username: string;
  invitee: string;
  repostLink: string;
  commentLink: string;
  walletAddress: string;
  referralSource: string;
  userAgent: string;
  ip: string;
  createdAt: string | null;
  steps: SubmissionSteps;
};

type ExistsResult = {
  exists: boolean;
  error?: string;
};

type SubmissionContextValue = {
  data: SubmissionData;
  updateData: (patch: Partial<SubmissionData>) => void;
  setStepCompleted: (step: keyof SubmissionSteps) => void;
  setReferralFromParam: (refParam: string | null) => string | null;
  validateUsername: (username: string) => boolean;
  validateEvmAddress: (address: string) => boolean;
  validateXLink: (link: string) => boolean;
  checkUsernameExists: (username: string) => Promise<ExistsResult>;
  checkWalletExists: (wallet: string) => Promise<ExistsResult>;
  checkInviteeExists: (inviteeUsername: string) => Promise<ExistsResult>;
  submitEntry: (payload: SubmissionData) => Promise<unknown>;
};

const SubmissionContext = createContext<SubmissionContextValue | undefined>(undefined);

const createInitialSteps = (): SubmissionSteps => ({
  username: { completed: false, ts: null },
  tasks: { completed: false, ts: null },
  wallet: { completed: false, ts: null },
});

const createInitialData = (): SubmissionData => ({
  username: '',
  invitee: '',
  repostLink: '',
  commentLink: '',
  walletAddress: '',
  referralSource: 'direct',
  userAgent: navigator.userAgent,
  ip: 'client-ip',
  createdAt: null,
  steps: createInitialSteps(),
});

export function SubmissionProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<SubmissionData>(() => createInitialData());
  const cachedUsernames = useRef(new Set<string>());
  const cachedWallets = useRef(new Set<string>());

  const updateData = useCallback((patch: Partial<SubmissionData>) => {
    setData((prev) => ({ ...prev, ...patch }));
  }, []);

  const setStepCompleted = useCallback((step: keyof SubmissionSteps) => {
    const ts = new Date().toISOString();
    setData((prev) => ({
      ...prev,
      steps: {
        ...prev.steps,
        [step]: { completed: true, ts },
      },
    }));
  }, []);

  const setReferralFromParam = useCallback((refParam: string | null) => {
    if (!refParam) {
      updateData({ referralSource: 'direct' });
      return null;
    }
    const normalized = refParam.startsWith('@') ? refParam : `@${refParam}`;
    setData((prev) => ({
      ...prev,
      referralSource: normalized,
      invitee: prev.invitee ? prev.invitee : normalized,
    }));
    return normalized;
  }, [updateData]);

  const validateUsername = useCallback((username: string) => {
    return username.startsWith('@') && username.length > 1 && username.length <= 30;
  }, []);

  const validateEvmAddress = useCallback((address: string) => {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
  }, []);

  const validateXLink = useCallback((link: string) => {
    return link.includes('x.com') || link.includes('twitter.com');
  }, []);

  const checkUsernameExists = useCallback(async (username: string): Promise<ExistsResult> => {
    try {
      const response = await fetch(`${API_ENDPOINTS.checkUsername}/${encodeURIComponent(username)}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const payload = await response.json();
      return { exists: Boolean(payload.exists) };
    } catch (error) {
      console.error('Error checking username:', error);
      return {
        exists: cachedUsernames.current.has(username.toLowerCase()),
        error: 'Network error, try again later',
      };
    }
  }, []);

  const checkWalletExists = useCallback(async (wallet: string): Promise<ExistsResult> => {
    try {
      const response = await fetch(`${API_ENDPOINTS.checkWallet}/${encodeURIComponent(wallet)}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const payload = await response.json();
      return { exists: Boolean(payload.exists) };
    } catch (error) {
      console.error('Error checking wallet:', error);
      return { exists: cachedWallets.current.has(wallet.toLowerCase()) };
    }
  }, []);

  const checkInviteeExists = useCallback(async (inviteeUsername: string): Promise<ExistsResult> => {
    try {
      const response = await fetch(`${API_ENDPOINTS.checkInvitee}/${encodeURIComponent(inviteeUsername)}`);
      if (!response.ok) {
        return { exists: false };
      }
      const payload = await response.json();
      return { exists: Boolean(payload.exists) };
    } catch (error) {
      console.error('Error checking invitee:', error);
      return { exists: false };
    }
  }, []);

  const submitEntry = useCallback(async (payload: SubmissionData) => {
    const response = await fetch(API_ENDPOINTS.submit, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...payload,
        context: payload,
      }),
    });

    if (response.status === 429) {
      throw new Error('Rate limit exceeded. Please try again later.');
    }

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.detail || 'Submission failed');
    }

    cachedUsernames.current.add(payload.username.toLowerCase());
    cachedWallets.current.add(payload.walletAddress.toLowerCase());

    return response.json();
  }, []);

  const value = useMemo<SubmissionContextValue>(() => ({
    data,
    updateData,
    setStepCompleted,
    setReferralFromParam,
    validateUsername,
    validateEvmAddress,
    validateXLink,
    checkUsernameExists,
    checkWalletExists,
    checkInviteeExists,
    submitEntry,
  }), [
    data,
    updateData,
    setStepCompleted,
    setReferralFromParam,
    validateUsername,
    validateEvmAddress,
    validateXLink,
    checkUsernameExists,
    checkWalletExists,
    checkInviteeExists,
    submitEntry,
  ]);

  return (
    <SubmissionContext.Provider value={value}>
      {children}
    </SubmissionContext.Provider>
  );
}

export function useSubmission() {
  const context = useContext(SubmissionContext);
  if (!context) {
    throw new Error('useSubmission must be used within SubmissionProvider');
  }
  return context;
}
