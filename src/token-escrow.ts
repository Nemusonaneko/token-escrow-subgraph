import { Create, Redeem, Revoke } from "../generated/TokenEscrow/TokenEscrow";
import { ERC20 } from "../generated/TokenEscrow/ERC20";
import { Token, Escrow } from "../generated/schema";

export function handleCreate(event: Create): void {
  let entity = Escrow.load(event.params.id.toHexString());
  if (entity === null) {
    entity = new Escrow(event.params.id.toHexString());
    let token = Token.load(event.params.token.toHexString());
    if (token === null) {
      token = new Token(event.params.token.toHexString());
      const erc20 = ERC20.bind(event.params.token);
      token.address = event.params.token;
      token.symbol = erc20.try_symbol().value;
      token.name = erc20.try_name().value;
      token.decimals = erc20.try_decimals().value;
      token.save();
    }
    entity.token = token.id;
    entity.payer = event.params.payer;
    entity.payee = event.params.payee;
    entity.amount = event.params.amount;
    entity.release = event.params.release;
  }
  entity.active = true;
  entity.save();
}

export function handleRedeem(event: Redeem): void {
  let entity = Escrow.load(event.params.id.toHexString());
  if (!entity) return;
  entity.active = false;
  entity.save();
}

export function handleRevoke(event: Revoke): void {
  let entity = Escrow.load(event.params.id.toHexString());
  if (!entity) return;
  entity.active = false;
  entity.save();
}
