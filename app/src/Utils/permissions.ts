export const canEditPage = (user: any, roles: any, page: any) => {
  if (roles.map((r: any) => r.slug).includes("admin")) return true;
  if (
    roles.find((roleA: any) =>
      page.canEdit.find((roleB: any) => roleB.slug === roleA.slug)
    )
  )
    return true;
  if (user.id === page.draftOwner.id) return true;
  return false;
};

export const slugs = (roles: any): string[] => {
  return roles.map((r: any) => r.slug);
};
