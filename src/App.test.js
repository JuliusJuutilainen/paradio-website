import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react";

describe('App component', () => {
  it('renders without crashing', () => {
    render(<App />);
  });
  it('displays the logo', () => {
    render(<App />);
    const logo = screen.getByAltText(/logo/i);
    expect(logo).toBeInTheDocument();
  });

  it('displays the text', () => {
    render(<App />);
    const text = screen.getByText(/paradio official site \[WIP\]/i);
    expect(text).toBeInTheDocument();
  });

  it('displays the link', () => {
    render(<App />);
    const link = screen.getByText(/Link/i);
    expect(link).toBeInTheDocument();
  });
});