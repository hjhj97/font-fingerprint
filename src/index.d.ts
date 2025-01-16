interface FingerprintResult {
  visitorId: string;
  components: {
    [key: string]: string;
  };
}

export default function getFingerprint(): FingerprintResult;
declare global {
  interface Window {
    getFingerprint: typeof getFingerprint;
  }
}
