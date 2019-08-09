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

export interface MutationUpdateOneUserFilter {
  every?: MutationUpdateOneUserWhereInput | null;
  some?: MutationUpdateOneUserWhereInput | null;
  none?: MutationUpdateOneUserWhereInput | null;
}

export interface MutationUpdateOneUserWhereInput {
  id?: StringFilter | null;
  users?: MutationUpdateOneUserFilter | null;
  slug?: StringFilter | null;
  locked?: BooleanFilter | null;
  viewPages?: MutationUpdateOneUserFilter | null;
  editPages?: MutationUpdateOneUserFilter | null;
  AND?: MutationUpdateOneUserWhereInput[] | null;
  OR?: MutationUpdateOneUserWhereInput[] | null;
  NOT?: MutationUpdateOneUserWhereInput[] | null;
}

export interface MutationUpsertOnePageFilter {
  every?: MutationUpsertOnePageWhereInput | null;
  some?: MutationUpsertOnePageWhereInput | null;
  none?: MutationUpsertOnePageWhereInput | null;
}

export interface MutationUpsertOnePageWhereInput {
  id?: StringFilter | null;
  users?: MutationUpsertOnePageFilter | null;
  slug?: StringFilter | null;
  locked?: BooleanFilter | null;
  viewPages?: MutationUpsertOnePageFilter | null;
  editPages?: MutationUpsertOnePageFilter | null;
  AND?: MutationUpsertOnePageWhereInput[] | null;
  OR?: MutationUpsertOnePageWhereInput[] | null;
  NOT?: MutationUpsertOnePageWhereInput[] | null;
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
  parent?: PageCreateManyWithoutParentInput | null;
  children?: PageCreateManyWithoutChildrenInput | null;
}

export interface PageCreateManyWithoutChildrenInput {
  create?: PageCreateWithoutParentInput[] | null;
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

export interface PageCreateManyWithoutParentInput {
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
  parent?: PageCreateManyWithoutParentInput | null;
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
  parent?: PageCreateManyWithoutParentInput | null;
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
  parent?: PageCreateManyWithoutParentInput | null;
}

export interface PageCreateWithoutDraftOwnerInput {
  id?: string | null;
  title: string;
  slug: string;
  content?: string | null;
  published: boolean;
  canView?: RoleCreateManyWithoutCanViewInput | null;
  canEdit?: RoleCreateManyWithoutCanEditInput | null;
  parent?: PageCreateManyWithoutParentInput | null;
  children?: PageCreateManyWithoutChildrenInput | null;
}

export interface PageCreateWithoutParentInput {
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

export interface PageUpdateInput {
  id?: string | null;
  title?: string | null;
  slug?: string | null;
  content?: string | null;
  published?: boolean | null;
  draftOwner?: UserUpdateOneWithoutDraftsInput | null;
  canView?: RoleUpdateManyWithoutViewPagesInput | null;
  canEdit?: RoleUpdateManyWithoutEditPagesInput | null;
  parent?: PageUpdateManyWithoutChildrenInput | null;
  children?: PageUpdateManyWithoutParentInput | null;
}

export interface PageUpdateManyDataInput {
  id?: string | null;
  title?: string | null;
  slug?: string | null;
  content?: string | null;
  published?: boolean | null;
}

export interface PageUpdateManyWithWhereNestedInput {
  where: MutationUpdateOneUserWhereInput;
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
  deleteMany?: MutationUpdateOneUserWhereInput[] | null;
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
  deleteMany?: MutationUpdateOneUserWhereInput[] | null;
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
  deleteMany?: MutationUpsertOnePageWhereInput[] | null;
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
  deleteMany?: MutationUpdateOneUserWhereInput[] | null;
  upsert?: PageUpsertWithWhereUniqueWithoutDraftOwnerInput[] | null;
}

export interface PageUpdateManyWithoutParentInput {
  create?: PageCreateWithoutParentInput[] | null;
  connect?: PageWhereUniqueInput[] | null;
  set?: PageWhereUniqueInput[] | null;
  disconnect?: PageWhereUniqueInput[] | null;
  delete?: PageWhereUniqueInput[] | null;
  update?: PageUpdateWithWhereUniqueWithoutParentInput[] | null;
  updateMany?: PageUpdateManyWithWhereNestedInput[] | null;
  deleteMany?: MutationUpsertOnePageWhereInput[] | null;
  upsert?: PageUpsertWithWhereUniqueWithoutParentInput[] | null;
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

export interface PageUpdateWithWhereUniqueWithoutParentInput {
  where: PageWhereUniqueInput;
  data: PageUpdateWithoutParentDataInput;
}

export interface PageUpdateWithoutCanEditDataInput {
  id?: string | null;
  title?: string | null;
  slug?: string | null;
  content?: string | null;
  published?: boolean | null;
  draftOwner?: UserUpdateOneWithoutDraftsInput | null;
  canView?: RoleUpdateManyWithoutViewPagesInput | null;
  parent?: PageUpdateManyWithoutChildrenInput | null;
  children?: PageUpdateManyWithoutParentInput | null;
}

export interface PageUpdateWithoutCanViewDataInput {
  id?: string | null;
  title?: string | null;
  slug?: string | null;
  content?: string | null;
  published?: boolean | null;
  draftOwner?: UserUpdateOneWithoutDraftsInput | null;
  canEdit?: RoleUpdateManyWithoutEditPagesInput | null;
  parent?: PageUpdateManyWithoutChildrenInput | null;
  children?: PageUpdateManyWithoutParentInput | null;
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
  parent?: PageUpdateManyWithoutChildrenInput | null;
}

export interface PageUpdateWithoutDraftOwnerDataInput {
  id?: string | null;
  title?: string | null;
  slug?: string | null;
  content?: string | null;
  published?: boolean | null;
  canView?: RoleUpdateManyWithoutViewPagesInput | null;
  canEdit?: RoleUpdateManyWithoutEditPagesInput | null;
  parent?: PageUpdateManyWithoutChildrenInput | null;
  children?: PageUpdateManyWithoutParentInput | null;
}

export interface PageUpdateWithoutParentDataInput {
  id?: string | null;
  title?: string | null;
  slug?: string | null;
  content?: string | null;
  published?: boolean | null;
  draftOwner?: UserUpdateOneWithoutDraftsInput | null;
  canView?: RoleUpdateManyWithoutViewPagesInput | null;
  canEdit?: RoleUpdateManyWithoutEditPagesInput | null;
  children?: PageUpdateManyWithoutParentInput | null;
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

export interface PageUpsertWithWhereUniqueWithoutParentInput {
  where: PageWhereUniqueInput;
  update: PageUpdateWithoutParentDataInput;
  create: PageCreateWithoutParentInput;
}

export interface PageWhereUniqueInput {
  id?: string | null;
  slug?: string | null;
}

export interface RoleCreateInput {
  id?: string | null;
  slug: string;
  locked?: boolean | null;
  users?: UserCreateManyWithoutUsersInput | null;
  viewPages?: PageCreateManyWithoutViewPagesInput | null;
  editPages?: PageCreateManyWithoutEditPagesInput | null;
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
  id?: string | null;
  slug: string;
  locked?: boolean | null;
  users?: UserCreateManyWithoutUsersInput | null;
  viewPages?: PageCreateManyWithoutViewPagesInput | null;
}

export interface RoleCreateWithoutUsersInput {
  id?: string | null;
  slug: string;
  locked?: boolean | null;
  viewPages?: PageCreateManyWithoutViewPagesInput | null;
  editPages?: PageCreateManyWithoutEditPagesInput | null;
}

export interface RoleCreateWithoutViewPagesInput {
  id?: string | null;
  slug: string;
  locked?: boolean | null;
  users?: UserCreateManyWithoutUsersInput | null;
  editPages?: PageCreateManyWithoutEditPagesInput | null;
}

export interface RoleUpdateManyDataInput {
  id?: string | null;
  slug?: string | null;
  locked?: boolean | null;
}

export interface RoleUpdateManyWithWhereNestedInput {
  where: MutationUpdateOneUserWhereInput;
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
  deleteMany?: MutationUpsertOnePageWhereInput[] | null;
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
  deleteMany?: MutationUpdateOneUserWhereInput[] | null;
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
  deleteMany?: MutationUpsertOnePageWhereInput[] | null;
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
  id?: string | null;
  slug?: string | null;
  locked?: boolean | null;
  users?: UserUpdateManyWithoutRolesInput | null;
  viewPages?: PageUpdateManyWithoutCanViewInput | null;
}

export interface RoleUpdateWithoutUsersDataInput {
  id?: string | null;
  slug?: string | null;
  locked?: boolean | null;
  viewPages?: PageUpdateManyWithoutCanViewInput | null;
  editPages?: PageUpdateManyWithoutCanEditInput | null;
}

export interface RoleUpdateWithoutViewPagesDataInput {
  id?: string | null;
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

export interface RoleWhereUniqueInput {
  id?: string | null;
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

export interface UserCreateInput {
  id?: string | null;
  email: string;
  name?: string | null;
  roles?: RoleCreateManyWithoutRolesInput | null;
  drafts?: PageCreateManyWithoutDraftsInput | null;
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

export interface UserUpdateInput {
  id?: string | null;
  email?: string | null;
  name?: string | null;
  roles?: RoleUpdateManyWithoutUsersInput | null;
  drafts?: PageUpdateManyWithoutDraftOwnerInput | null;
}

export interface UserUpdateManyDataInput {
  id?: string | null;
  email?: string | null;
  name?: string | null;
}

export interface UserUpdateManyWithWhereNestedInput {
  where: MutationUpsertOnePageWhereInput;
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
  deleteMany?: MutationUpsertOnePageWhereInput[] | null;
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

export interface UserWhereUniqueInput {
  id?: string | null;
  email?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
