# PwnedPasswords

NodeJS application for checking if your paasword has been leaked.

Utilitises the API [https://haveibeenpwned.com/API/v2](https://haveibeenpwned.com/API/v2).

This application takes your password and creates an sha1 hash, it then sends the first 5 characters of this hash to the 'have i been pwned' api. This then returns a list of all leaked passwords matching the
beginning of the hash and the count of each.

This application then filters to see if your password hash exists in the list of returned hashes.

## Clone the repo

```
λ git clone git@github.com:mikeq/pwnedpass.git
```

## Running

```
cd pwnedpass
λ node index.js -h
  ____                          _   ____                                     _
 |  _ \__      ___ __   ___  __| | |  _ \ __ _ ___ _____      _____  _ __ __| |___
 | |_) \ \ /\ / / '_ \ / _ \/ _` | | |_) / _` / __/ __\ \ /\ / / _ \| '__/ _` / __|
 |  __/ \ V  V /| | | |  __/ (_| | |  __/ (_| \__ \__ \\ V  V / (_) | | | (_| \__ \
 |_|     \_/\_/ |_| |_|\___|\__,_| |_|   \__,_|___/___/ \_/\_/ \___/|_|  \__,_|___/

Usage: node index.js <password>

Options:
  --version   Show version number                                      [boolean]
  -h, --help  Show help                                                [boolean]

Copyright © 2019 Mike Quinn

λ node index.js password1
  ____                          _   ____                                     _
 |  _ \__      ___ __   ___  __| | |  _ \ __ _ ___ _____      _____  _ __ __| |___
 | |_) \ \ /\ / / '_ \ / _ \/ _` | | |_) / _` / __/ __\ \ /\ / / _ \| '__/ _` / __|
 |  __/ \ V  V /| | | |  __/ (_| | |  __/ (_| \__ \__ \\ V  V / (_) | | | (_| \__ \
 |_|     \_/\_/ |_| |_|\___|\__,_| |_|   \__,_|___/___/ \_/\_/ \___/|_|  \__,_|___/

Your password 'password1' has been leaked 2401761 times.

λ node index.js sdfjhksjhwjhkdfhadf
  ____                          _   ____                                     _
 |  _ \__      ___ __   ___  __| | |  _ \ __ _ ___ _____      _____  _ __ __| |___
 | |_) \ \ /\ / / '_ \ / _ \/ _` | | |_) / _` / __/ __\ \ /\ / / _ \| '__/ _` / __|
 |  __/ \ V  V /| | | |  __/ (_| | |  __/ (_| \__ \__ \\ V  V / (_) | | | (_| \__ \
 |_|     \_/\_/ |_| |_|\___|\__,_| |_|   \__,_|___/___/ \_/\_/ \___/|_|  \__,_|___/

Your password 'sdfjhksjhwjhkdfhadf' has not been leaked

```
