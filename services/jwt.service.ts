import { sign } from "jsonwebtoken";

const signAccessToken = async (sessionID: string) => {
  // @ts-ignore
  const accessToken = sign({ id: sessionID }, process.env.JWT_KEY, { expiresIn: "2h" });
  return accessToken;
};

const signRefreshToken = async (sessionID: string) => {
  // @ts-ignore
  const refreshToken = sign({ id: sessionID }, process.env.JWT_REFRESH_KEY, { expiresIn: "1d" });
  return refreshToken;
};

module.exports = { signAccessToken, signRefreshToken };
