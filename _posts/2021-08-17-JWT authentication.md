---
Layout: post
Title: JWT authentication
Date: 2021-08-17
---

## JSON Web Token (JWT)

JSON Web Token (JWT) is an open standard (RFC 75190) that defines a compact and self-contained way for securely transmitting information between parties as a JSOn object. This information can be verified and trusted because it is digitally signed. JWTs can be singed using a secret (with HMAC algorithm) or a public/private key pair using RSA or ECDSA.

Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.
