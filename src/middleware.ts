import { withClerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

/// Middleware to check if user is logged in
/// Runs before everything else in the app
export default withClerkMiddleware(() => {
  console.log('Middleware running...');  
  return NextResponse.next();
});

// Stop Middleware running on static files
export const config = { matcher:  '/((?!_next/image|_next/static|favicon.ico).*)'};