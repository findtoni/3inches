import { createClient, configureChains } from "wagmi";
import { mainnet, goerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";

const { provider} = configureChains(
  [mainnet, goerli],
  [alchemyProvider()]
);

export const client = createClient({
  autoConnect: true,
  provider,
});
