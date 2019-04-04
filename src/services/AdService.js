// create ID in ADMOB
const INTERSTITIAL_AD = "";

export class AdService {
  AdMob = null;

  setAdMob(AdMob) {
    this.AdMob = AdMob;
  }

  showInterstital() {
    if (!this.AdMob) return;
    this.AdMob.prepareInterstitial({
      adId: INTERSTITIAL_AD,
      autoShow: true,
      isTesting: false
    });
  }
}

export const adService = new AdService();
