import Razorpay from 'razorpay';
/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare global {
    interface Window {
      Razorpay: any;
    }
  }