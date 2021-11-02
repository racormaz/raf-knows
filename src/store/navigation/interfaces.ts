export interface NavigationState {
  activeSection: string;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

