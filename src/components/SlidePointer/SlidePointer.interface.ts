import { BaseHTMLAttributes } from 'react';
export interface Props extends BaseHTMLAttributes<any> {
  currentStep: number;
  totalSteps: number;
}
