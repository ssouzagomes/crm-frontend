// eslint-disable-next-line no-shadow
export enum PossibleApiMessages {
  'UNKWON_ERROR',
}

export interface DefaultApiResponse<T> {
  isValid: boolean
  message: keyof (typeof PossibleApiMessages)[]
  result: T
}
