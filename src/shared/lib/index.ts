export const getName = (
  firstName: string | null,
  lastName: string | null,
  emptyState?: string,
) => {
  if (firstName && lastName) {
    return `${firstName} ${lastName}`;
  }
  if (firstName) {
    return `${firstName}`;
  }

  return emptyState ?? null;
};
