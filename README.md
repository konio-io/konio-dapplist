# konio-dapplist
Dapps listed inside Konio wallet

To list your dapp in the "Dapps" section of the Konio wallet, create a pull request containing a file named "yourprojectname.json". The file should be structured as follows:

```
{
    "id":"test-dapp",
    "icon":"data:image/png;base64,...",
    "name":"Test Dapp",
    "summary":"WalletConnect Test Dapp",
    "description":"WalletConnect Koinos SDK Test Dapp. Library to easily interact with WalletConnect compatible Koinos wallets.",
    "tags":[],
    "url":"https://armana-group.github.io/walletconnect-koinos-sdk-js/"
}
```