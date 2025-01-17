interface FingerprintResult {
  visitorId: string;
  components: {
    [key: string]: unknown | unknown[];
  };
}

export default function getFingerprint(): FingerprintResult;
declare global {
  interface Window {
    getFingerprint: typeof getFingerprint;
  }
}
