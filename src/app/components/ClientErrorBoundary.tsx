'use client';

import React from 'react';

type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
};

export default class ClientErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error('UI error boundary caught an error:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="mx-auto max-w-2xl px-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-white">Something went wrong.</h2>
          <p className="mt-3 text-sm text-white/70">
            We&apos;re sorry. Please refresh the page or contact us if this issue continues.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}
