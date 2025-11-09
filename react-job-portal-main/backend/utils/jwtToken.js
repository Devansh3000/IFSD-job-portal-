export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();

  const options = {
    expires: new Date(
      Date.now() + (process.env.COOKIE_EXPIRE || 5) * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    sameSite: "Lax", // ✅ works reliably on localhost
    secure: false,   // ✅ keep false for http://localhost
  };

  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({
      success: true,
      user,
      message,
      token,
    });
};
