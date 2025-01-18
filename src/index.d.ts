interface FingerprintResult {
  visitorId: string;
  components: {
    font: string[];
  };
}

export default function getFingerprint(): FingerprintResult;
declare global {
  interface Window {
    getFingerprint: typeof getFingerprint;
  }
}
