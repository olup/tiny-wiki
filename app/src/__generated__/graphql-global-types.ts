/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface BooleanFilter {
  equals?: boolean | null;
  not?: boolean | null;
}

export interface NullableStringFilter {
  equals?: string | null;
  not?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string | null;
  lte?: string | null;
  gt?: string | null;
  gte?: string | null;
  contains?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
}

export interface PageCreateInput {
  id?: string | null;
  title: string;
  slug: string;
  content?: string | null;
  published: boolean;
  draftOwner?: UserCreateOneWithoutDraftOwnerInput | null;
  canView?: RoleCreateManyWithoutCanViewInput | null;
  canEdit?: RoleCreateManyWithoutCanEditInput | null;
  parents?: PageCreateManyWithoutParentsInput | null;
  children?: PageCreateManyWithoutChildrenInput | null;
}

export interface PageCreateManyWithoutChildrenInput {
  create?: PageCreateWithoutParentsInput[] | null;
  connect?: PageWhereUniqueInput[] | null;
}

export interface PageCreateManyWithoutDraftsInput {
  create?: PageCreateWithoutDraftOwnerInput[] | null;
  connect?: PageWhereUniqueInput[] | null;
}

export interface PageCreateManyWithoutEditPagesInput {
  create?: PageCreateWithoutCanEditInput[] | null;
  connect?: PageWhereUniqueInput[] | null;
}

export interface PageCreateManyWithoutParentsInput {
  create?: PageCreateWithoutChildrenInput[] | null;
  connect?: PageWhereUniqueInput[] | null;
}

export interface PageCreateManyWithoutViewPagesInput {
  create?: PageCreateWithoutCanViewInput[] | null;
  connect?: PageWhereUniqueInput[] | null;
}

export interface PageCreateWithoutCanEditInput {
  id?: string | null;
  title: string;
  slug: string;
  content?: string | null;
  published: boolean;
  draftOwner?: UserCreateOneWithoutDraftOwnerInput | null;
  canView?: RoleCreateManyWithoutCanViewInput | null;
  parents?: PageCreateManyWithoutParentsInput | null;
  children?: PageCreateManyWithoutChildrenInput | null;
}

export interface PageCreateWithoutCanViewInput {
  id?: string | null;
  title: string;
  slug: string;
  content?: string | null;
  published: boolean;
  draftOwner?: UserCreateOneWithoutDraftOwnerInput | null;
  canEdit?: RoleCreateManyWithoutCanEditInput | null;
  parents?: PageCreateManyWithoutParentsInput | null;
  children?: PageCreateManyWithoutChildrenInput | null;
}

export interface PageCreateWithoutChildrenInput {
  id?: string | null;
  title: string;
  slug: string;
  content?: string | null;
  published: boolean;
  draftOwner?: UserCreateOneWithoutDraftOwnerInput | null;
  canView?: RoleCreateManyWithoutCanViewInput | null;
  canEdit?: RoleCreateManyWithoutCanEditInput | null;
  parents?: PageCreateManyWithoutParentsInput | null;
}

export interface PageCreateWithoutDraftOwnerInput {
  id?: string | null;
  title: string;
  slug: string;
  content?: string | null;
  published: boolean;
  canView?: RoleCreateManyWithoutCanViewInput | null;
  canEdit?: RoleCreateManyWithoutCanEditInput | null;
  parents?: PageCreateManyWithoutParentsInput | null;
  children?: PageCreateManyWithoutChildrenInput | null;
}

export interface PageCreateWithoutParentsInput {
  id?: string | null;
  title: string;
  slug: string;
  content?: string | null;
  published: boolean;
  draftOwner?: UserCreateOneWithoutDraftOwnerInput | null;
  canView?: RoleCreateManyWithoutCanViewInput | null;
  canEdit?: RoleCreateManyWithoutCanEditInput | null;
  children?: PageCreateManyWithoutChildrenInput | null;
}

export interface PageFilter {
  every?: PageWhereInput | null;
  some?: PageWhereInput | null;
  none?: PageWhereInput | null;
}

export interface PageScalarWhereInput {
  id?: StringFilter | null;
  title?: StringFilter | null;
  slug?: StringFilter | null;
  content?: NullableStringFilter | null;
  published?: BooleanFilter | null;
  canView?: RoleFilter | null;
  canEdit?: RoleFilter | null;
  parents?: PageFilter | null;
  children?: PageFilter | null;
  AND?: PageScalarWhereInput[] | null;
  OR?: PageScalarWhereInput[] | null;
  NOT?: PageScalarWhereInput[] | null;
}

export interface PageUpdateInput {
  id?: string | null;
  title?: string | null;
  slug?: string | null;
  content?: string | null;
  published?: boolean | null;
  draftOwner?: UserUpdateOneWithoutDraftsInput | null;
  canView?: RoleUpdateManyWithoutViewPagesInput | null;
  canEdit?: RoleUpdateManyWithoutEditPagesInput | null;
  parents?: PageUpdateManyWithoutChildrenInput | null;
  children?: PageUpdateManyWithoutParentsInput | null;
}

export interface PageUpdateManyDataInput {
  id?: string | null;
  title?: string | null;
  slug?: string | null;
  content?: string | null;
  published?: boolean | null;
}

export interface PageUpdateManyWithWhereNestedInput {
  where: PageScalarWhereInput;
  data: PageUpdateManyDataInput;
}

export interface PageUpdateManyWithoutCanEditInput {
  create?: PageCreateWithoutCanEditInput[] | null;
  connect?: PageWhereUniqueInput[] | null;
  set?: PageWhereUniqueInput[] | null;
  disconnect?: PageWhereUniqueInput[] | null;
  delete?: PageWhereUniqueInput[] | null;
  update?: PageUpdateWithWhereUniqueWithoutCanEditInput[] | null;
  updateMany?: PageUpdateManyWithWhereNestedInput[] | null;
  deleteMany?: PageScalarWhereInput[] | null;
  upsert?: PageUpsertWithWhereUniqueWithoutCanEditInput[] | null;
}

export interface PageUpdateManyWithoutCanViewInput {
  create?: PageCreateWithoutCanViewInput[] | null;
  connect?: PageWhereUniqueInput[] | null;
  set?: PageWhereUniqueInput[] | null;
  disconnect?: PageWhereUniqueInput[] | null;
  delete?: PageWhereUniqueInput[] | null;
  update?: PageUpdateWithWhereUniqueWithoutCanViewInput[] | null;
  updateMany?: PageUpdateManyWithWhereNestedInput[] | null;
  deleteMany?: PageScalarWhereInput[] | null;
  upsert?: PageUpsertWithWhereUniqueWithoutCanViewInput[] | null;
}

export interface PageUpdateManyWithoutChildrenInput {
  create?: PageCreateWithoutChildrenInput[] | null;
  connect?: PageWhereUniqueInput[] | null;
  set?: PageWhereUniqueInput[] | null;
  disconnect?: PageWhereUniqueInput[] | null;
  delete?: PageWhereUniqueInput[] | null;
  update?: PageUpdateWithWhereUniqueWithoutChildrenInput[] | null;
  updateMany?: PageUpdateManyWithWhereNestedInput[] | null;
  deleteMany?: PageScalarWhereInput[] | null;
  upsert?: PageUpsertWithWhereUniqueWithoutChildrenInput[] | null;
}

export interface PageUpdateManyWithoutDraftOwnerInput {
  create?: PageCreateWithoutDraftOwnerInput[] | null;
  connect?: PageWhereUniqueInput[] | null;
  set?: PageWhereUniqueInput[] | null;
  disconnect?: PageWhereUniqueInput[] | null;
  delete?: PageWhereUniqueInput[] | null;
  update?: PageUpdateWithWhereUniqueWithoutDraftOwnerInput[] | null;
  updateMany?: PageUpdateManyWithWhereNestedInput[] | null;
  deleteMany?: PageScalarWhereInput[] | null;
  upsert?: PageUpsertWithWhereUniqueWithoutDraftOwnerInput[] | null;
}

export interface PageUpdateManyWithoutParentsInput {
  create?: PageCreateWithoutParentsInput[] | null;
  connect?: PageWhereUniqueInput[] | null;
  set?: PageWhereUniqueInput[] | null;
  disconnect?: PageWhereUniqueInput[] | null;
  delete?: PageWhereUniqueInput[] | null;
  update?: PageUpdateWithWhereUniqueWithoutParentsInput[] | null;
  updateMany?: PageUpdateManyWithWhereNestedInput[] | null;
  deleteMany?: PageScalarWhereInput[] | null;
  upsert?: PageUpsertWithWhereUniqueWithoutParentsInput[] | null;
}

export interface PageUpdateWithWhereUniqueWithoutCanEditInput {
  where: PageWhereUniqueInput;
  data: PageUpdateWithoutCanEditDataInput;
}

export interface PageUpdateWithWhereUniqueWithoutCanViewInput {
  where: PageWhereUniqueInput;
  data: PageUpdateWithoutCanViewDataInput;
}

export interface PageUpdateWithWhereUniqueWithoutChildrenInput {
  where: PageWhereUniqueInput;
  data: PageUpdateWithoutChildrenDataInput;
}

export interface PageUpdateWithWhereUniqueWithoutDraftOwnerInput {
  where: PageWhereUniqueInput;
  data: PageUpdateWithoutDraftOwnerDataInput;
}

export interface PageUpdateWithWhereUniqueWithoutParentsInput {
  where: PageWhereUniqueInput;
  data: PageUpdateWithoutParentsDataInput;
}

export interface PageUpdateWithoutCanEditDataInput {
  id?: string | null;
  title?: string | null;
  slug?: string | null;
  content?: string | null;
  published?: boolean | null;
  draftOwner?: UserUpdateOneWithoutDraftsInput | null;
  canView?: RoleUpdateManyWithoutViewPagesInput | null;
  parents?: PageUpdateManyWithoutChildrenInput | null;
  children?: PageUpdateManyWithoutParentsInput | null;
}

export interface PageUpdateWithoutCanViewDataInput {
  id?: string | null;
  title?: string | null;
  slug?: string | null;
  content?: string | null;
  published?: boolean | null;
  draftOwner?: UserUpdateOneWithoutDraftsInput | null;
  canEdit?: RoleUpdateManyWithoutEditPagesInput | null;
  parents?: PageUpdateManyWithoutChildrenInput | null;
  children?: PageUpdateManyWithoutParentsInput | null;
}

export interface PageUpdateWithoutChildrenDataInput {
  id?: string | null;
  title?: string | null;
  slug?: string | null;
  content?: string | null;
  published?: boolean | null;
  draftOwner?: UserUpdateOneWithoutDraftsInput | null;
  canView?: RoleUpdateManyWithoutViewPagesInput | null;
  canEdit?: RoleUpdateManyWithoutEditPagesInput | null;
  parents?: PageUpdateManyWithoutChildrenInput | null;
}

export interface PageUpdateWithoutDraftOwnerDataInput {
  id?: string | null;
  title?: string | null;
  slug?: string | null;
  content?: string | null;
  published?: boolean | null;
  canView?: RoleUpdateManyWithoutViewPagesInput | null;
  canEdit?: RoleUpdateManyWithoutEditPagesInput | null;
  parents?: PageUpdateManyWithoutChildrenInput | null;
  children?: PageUpdateManyWithoutParentsInput | null;
}

export interface PageUpdateWithoutParentsDataInput {
  id?: string | null;
  title?: string | null;
  slug?: string | null;
  content?: string | null;
  published?: boolean | null;
  draftOwner?: UserUpdateOneWithoutDraftsInput | null;
  canView?: RoleUpdateManyWithoutViewPagesInput | null;
  canEdit?: RoleUpdateManyWithoutEditPagesInput | null;
  children?: PageUpdateManyWithoutParentsInput | null;
}

export interface PageUpsertWithWhereUniqueWithoutCanEditInput {
  where: PageWhereUniqueInput;
  update: PageUpdateWithoutCanEditDataInput;
  create: PageCreateWithoutCanEditInput;
}

export interface PageUpsertWithWhereUniqueWithoutCanViewInput {
  where: PageWhereUniqueInput;
  update: PageUpdateWithoutCanViewDataInput;
  create: PageCreateWithoutCanViewInput;
}

export interface PageUpsertWithWhereUniqueWithoutChildrenInput {
  where: PageWhereUniqueInput;
  update: PageUpdateWithoutChildrenDataInput;
  create: PageCreateWithoutChildrenInput;
}

export interface PageUpsertWithWhereUniqueWithoutDraftOwnerInput {
  where: PageWhereUniqueInput;
  update: PageUpdateWithoutDraftOwnerDataInput;
  create: PageCreateWithoutDraftOwnerInput;
}

export interface PageUpsertWithWhereUniqueWithoutParentsInput {
  where: PageWhereUniqueInput;
  update: PageUpdateWithoutParentsDataInput;
  create: PageCreateWithoutParentsInput;
}

export interface PageWhereInput {
  id?: StringFilter | null;
  title?: StringFilter | null;
  slug?: StringFilter | null;
  content?: NullableStringFilter | null;
  published?: BooleanFilter | null;
  canView?: RoleFilter | null;
  canEdit?: RoleFilter | null;
  parents?: PageFilter | null;
  children?: PageFilter | null;
  AND?: PageWhereInput[] | null;
  OR?: PageWhereInput[] | null;
  NOT?: PageWhereInput[] | null;
  draftOwner?: UserWhereInput | null;
}

export interface PageWhereUniqueInput {
  id?: string | null;
  slug?: string | null;
}

export interface RoleCreateManyWithoutCanEditInput {
  create?: RoleCreateWithoutEditPagesInput[] | null;
  connect?: RoleWhereUniqueInput[] | null;
}

export interface RoleCreateManyWithoutCanViewInput {
  create?: RoleCreateWithoutViewPagesInput[] | null;
  connect?: RoleWhereUniqueInput[] | null;
}

export interface RoleCreateManyWithoutRolesInput {
  create?: RoleCreateWithoutUsersInput[] | null;
  connect?: RoleWhereUniqueInput[] | null;
}

export interface RoleCreateWithoutEditPagesInput {
  slug?: string | null;
  locked?: boolean | null;
  users?: UserCreateManyWithoutUsersInput | null;
  viewPages?: PageCreateManyWithoutViewPagesInput | null;
}

export interface RoleCreateWithoutUsersInput {
  slug?: string | null;
  locked?: boolean | null;
  viewPages?: PageCreateManyWithoutViewPagesInput | null;
  editPages?: PageCreateManyWithoutEditPagesInput | null;
}

export interface RoleCreateWithoutViewPagesInput {
  slug?: string | null;
  locked?: boolean | null;
  users?: UserCreateManyWithoutUsersInput | null;
  editPages?: PageCreateManyWithoutEditPagesInput | null;
}

export interface RoleFilter {
  every?: RoleWhereInput | null;
  some?: RoleWhereInput | null;
  none?: RoleWhereInput | null;
}

export interface RoleScalarWhereInput {
  slug?: StringFilter | null;
  users?: UserFilter | null;
  locked?: BooleanFilter | null;
  viewPages?: PageFilter | null;
  editPages?: PageFilter | null;
  AND?: RoleScalarWhereInput[] | null;
  OR?: RoleScalarWhereInput[] | null;
  NOT?: RoleScalarWhereInput[] | null;
}

export interface RoleUpdateManyDataInput {
  slug?: string | null;
  locked?: boolean | null;
}

export interface RoleUpdateManyWithWhereNestedInput {
  where: RoleScalarWhereInput;
  data: RoleUpdateManyDataInput;
}

export interface RoleUpdateManyWithoutEditPagesInput {
  create?: RoleCreateWithoutEditPagesInput[] | null;
  connect?: RoleWhereUniqueInput[] | null;
  set?: RoleWhereUniqueInput[] | null;
  disconnect?: RoleWhereUniqueInput[] | null;
  delete?: RoleWhereUniqueInput[] | null;
  update?: RoleUpdateWithWhereUniqueWithoutEditPagesInput[] | null;
  updateMany?: RoleUpdateManyWithWhereNestedInput[] | null;
  deleteMany?: RoleScalarWhereInput[] | null;
  upsert?: RoleUpsertWithWhereUniqueWithoutEditPagesInput[] | null;
}

export interface RoleUpdateManyWithoutUsersInput {
  create?: RoleCreateWithoutUsersInput[] | null;
  connect?: RoleWhereUniqueInput[] | null;
  set?: RoleWhereUniqueInput[] | null;
  disconnect?: RoleWhereUniqueInput[] | null;
  delete?: RoleWhereUniqueInput[] | null;
  update?: RoleUpdateWithWhereUniqueWithoutUsersInput[] | null;
  updateMany?: RoleUpdateManyWithWhereNestedInput[] | null;
  deleteMany?: RoleScalarWhereInput[] | null;
  upsert?: RoleUpsertWithWhereUniqueWithoutUsersInput[] | null;
}

export interface RoleUpdateManyWithoutViewPagesInput {
  create?: RoleCreateWithoutViewPagesInput[] | null;
  connect?: RoleWhereUniqueInput[] | null;
  set?: RoleWhereUniqueInput[] | null;
  disconnect?: RoleWhereUniqueInput[] | null;
  delete?: RoleWhereUniqueInput[] | null;
  update?: RoleUpdateWithWhereUniqueWithoutViewPagesInput[] | null;
  updateMany?: RoleUpdateManyWithWhereNestedInput[] | null;
  deleteMany?: RoleScalarWhereInput[] | null;
  upsert?: RoleUpsertWithWhereUniqueWithoutViewPagesInput[] | null;
}

export interface RoleUpdateWithWhereUniqueWithoutEditPagesInput {
  where: RoleWhereUniqueInput;
  data: RoleUpdateWithoutEditPagesDataInput;
}

export interface RoleUpdateWithWhereUniqueWithoutUsersInput {
  where: RoleWhereUniqueInput;
  data: RoleUpdateWithoutUsersDataInput;
}

export interface RoleUpdateWithWhereUniqueWithoutViewPagesInput {
  where: RoleWhereUniqueInput;
  data: RoleUpdateWithoutViewPagesDataInput;
}

export interface RoleUpdateWithoutEditPagesDataInput {
  slug?: string | null;
  locked?: boolean | null;
  users?: UserUpdateManyWithoutRolesInput | null;
  viewPages?: PageUpdateManyWithoutCanViewInput | null;
}

export interface RoleUpdateWithoutUsersDataInput {
  slug?: string | null;
  locked?: boolean | null;
  viewPages?: PageUpdateManyWithoutCanViewInput | null;
  editPages?: PageUpdateManyWithoutCanEditInput | null;
}

export interface RoleUpdateWithoutViewPagesDataInput {
  slug?: string | null;
  locked?: boolean | null;
  users?: UserUpdateManyWithoutRolesInput | null;
  editPages?: PageUpdateManyWithoutCanEditInput | null;
}

export interface RoleUpsertWithWhereUniqueWithoutEditPagesInput {
  where: RoleWhereUniqueInput;
  update: RoleUpdateWithoutEditPagesDataInput;
  create: RoleCreateWithoutEditPagesInput;
}

export interface RoleUpsertWithWhereUniqueWithoutUsersInput {
  where: RoleWhereUniqueInput;
  update: RoleUpdateWithoutUsersDataInput;
  create: RoleCreateWithoutUsersInput;
}

export interface RoleUpsertWithWhereUniqueWithoutViewPagesInput {
  where: RoleWhereUniqueInput;
  update: RoleUpdateWithoutViewPagesDataInput;
  create: RoleCreateWithoutViewPagesInput;
}

export interface RoleWhereInput {
  slug?: StringFilter | null;
  users?: UserFilter | null;
  locked?: BooleanFilter | null;
  viewPages?: PageFilter | null;
  editPages?: PageFilter | null;
  AND?: RoleWhereInput[] | null;
  OR?: RoleWhereInput[] | null;
  NOT?: RoleWhereInput[] | null;
}

export interface RoleWhereUniqueInput {
  slug?: string | null;
}

export interface StringFilter {
  equals?: string | null;
  not?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string | null;
  lte?: string | null;
  gt?: string | null;
  gte?: string | null;
  contains?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
}

export interface UserCreateManyWithoutUsersInput {
  create?: UserCreateWithoutRolesInput[] | null;
  connect?: UserWhereUniqueInput[] | null;
}

export interface UserCreateOneWithoutDraftOwnerInput {
  create?: UserCreateWithoutDraftsInput | null;
  connect?: UserWhereUniqueInput | null;
}

export interface UserCreateWithoutDraftsInput {
  id?: string | null;
  email: string;
  name?: string | null;
  roles?: RoleCreateManyWithoutRolesInput | null;
}

export interface UserCreateWithoutRolesInput {
  id?: string | null;
  email: string;
  name?: string | null;
  drafts?: PageCreateManyWithoutDraftsInput | null;
}

export interface UserFilter {
  every?: UserWhereInput | null;
  some?: UserWhereInput | null;
  none?: UserWhereInput | null;
}

export interface UserScalarWhereInput {
  id?: StringFilter | null;
  email?: StringFilter | null;
  name?: NullableStringFilter | null;
  roles?: RoleFilter | null;
  drafts?: PageFilter | null;
  AND?: UserScalarWhereInput[] | null;
  OR?: UserScalarWhereInput[] | null;
  NOT?: UserScalarWhereInput[] | null;
}

export interface UserUpdateManyDataInput {
  id?: string | null;
  email?: string | null;
  name?: string | null;
}

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput;
  data: UserUpdateManyDataInput;
}

export interface UserUpdateManyWithoutRolesInput {
  create?: UserCreateWithoutRolesInput[] | null;
  connect?: UserWhereUniqueInput[] | null;
  set?: UserWhereUniqueInput[] | null;
  disconnect?: UserWhereUniqueInput[] | null;
  delete?: UserWhereUniqueInput[] | null;
  update?: UserUpdateWithWhereUniqueWithoutRolesInput[] | null;
  updateMany?: UserUpdateManyWithWhereNestedInput[] | null;
  deleteMany?: UserScalarWhereInput[] | null;
  upsert?: UserUpsertWithWhereUniqueWithoutRolesInput[] | null;
}

export interface UserUpdateOneWithoutDraftsInput {
  create?: UserCreateWithoutDraftsInput | null;
  connect?: UserWhereUniqueInput | null;
  disconnect?: boolean | null;
  delete?: boolean | null;
  update?: UserUpdateWithoutDraftsDataInput | null;
  upsert?: UserUpsertWithoutDraftsInput | null;
}

export interface UserUpdateWithWhereUniqueWithoutRolesInput {
  where: UserWhereUniqueInput;
  data: UserUpdateWithoutRolesDataInput;
}

export interface UserUpdateWithoutDraftsDataInput {
  id?: string | null;
  email?: string | null;
  name?: string | null;
  roles?: RoleUpdateManyWithoutUsersInput | null;
}

export interface UserUpdateWithoutRolesDataInput {
  id?: string | null;
  email?: string | null;
  name?: string | null;
  drafts?: PageUpdateManyWithoutDraftOwnerInput | null;
}

export interface UserUpsertWithWhereUniqueWithoutRolesInput {
  where: UserWhereUniqueInput;
  update: UserUpdateWithoutRolesDataInput;
  create: UserCreateWithoutRolesInput;
}

export interface UserUpsertWithoutDraftsInput {
  update: UserUpdateWithoutDraftsDataInput;
  create: UserCreateWithoutDraftsInput;
}

export interface UserWhereInput {
  id?: StringFilter | null;
  email?: StringFilter | null;
  name?: NullableStringFilter | null;
  roles?: RoleFilter | null;
  drafts?: PageFilter | null;
  AND?: UserWhereInput[] | null;
  OR?: UserWhereInput[] | null;
  NOT?: UserWhereInput[] | null;
}

export interface UserWhereUniqueInput {
  id?: string | null;
  email?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
