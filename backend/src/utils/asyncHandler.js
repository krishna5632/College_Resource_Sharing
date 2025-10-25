const asyncHandler = (func) => async (req, res, next) => {
  try {
    // Run the async function
    await func(req, res, next);
  } catch (error) {
  
     console.error("Async error caught:", error); // helpful log

         const status = typeof error.statusCode === "number" && error.statusCode >= 100 && error.statusCode < 600
      ? error.statusCode
      : 500;
    // Send custom error response
    res.status(status).json({
      success: false,
      message: error.message
    });
    // Forward error to centralized error handler
    next(error);
  }
}

export { asyncHandler };
