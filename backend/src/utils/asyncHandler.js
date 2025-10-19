const asyncHandler = (func) => async (req, res, next) => {
  try {
    // Run the async function
    await func(req, res, next);
  } catch (error) {
    // Send custom error response
    res.status(error.code || 500).json({
      success: false,
      message: error.message
    });
    // Forward error to centralized error handler
    next(error);
  }
}

export { asyncHandler };
