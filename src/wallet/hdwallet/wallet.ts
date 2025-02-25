import { IHDKey } from "../../bips/bip32/hdkey/core";
import { BaseWallet } from "../core/base-wallet";

/**
 * Provide detail implementation for a wallet which is a derivation from a HD wallet
 */
export class Wallet extends BaseWallet<IHDKey> {

  public getReferenceKey(): string {
    return this.getKey().getPath();
  }

  public getPrivateKeyByteArray(): Uint8Array {
    return this.getKey().getPrivateKey();
  }

  public getRawPublicKeyByteArray(): Promise<Uint8Array> {
    return this.getKey().getPublicKey();
  }

}