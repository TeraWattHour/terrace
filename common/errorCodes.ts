export enum ErrorCode {
  FATAL_INTERNAL = "fatal-internal-error",
  BAD_CREDENTIALS = "bad-credentials",
  BAD_TOKEN = "bad-token",
  EXPIRED_TOKEN = "expired-token",
  USER_BANNED = "user-banned",
  VALIDATION = "validation",
  NOT_AUTHENTICATED = "not-authenticated",
  EMAIL_TAKEN = "email-taken",
  FORBIDDEN = "forbidden",
  TOO_MANY_REQUESTS = "too-many-requests",
  CANT_PROCESS = "cant-process",
  TIMED_OUT = "timed-out",
  NOT_FOUND = "not-found",
  CONFLICT = "conflict",
}

export const errors: ErrorType = {
  "fatal-internal-error": "An error occured. Please try again later.",
  validation: "Oops! It looks like you made a mistake.",
  "bad-token": "The provided token is incorrect.",
  "expired-token": "The provided token as expired.",
  "user-banned": "Ouch. You must have done something bad...",
  "cant-process": "Sorry. We couldn't process your request.",
  forbidden: "Wait a minute. You can't do that!",
};

export const humanizeError = (code: any): string => {
  return errors[code as unknown as ErrorCode] || code;
};

type ErrorType = {
  [Property in ErrorCode]?: string;
};
