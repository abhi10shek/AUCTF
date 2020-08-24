ulong check_3(char *param_1)
{
  bool bVar1;
  size_t sVar2;
  void *pvVar3;
  int local_5c;
  int local_54;
  int local_48 [4];
  local_48[0] = 122;//l
  local_48[1] = 33;//3
  local_48[2] = 33;//3
  local_48[3] = 98;//t
  sVar2 = strlen(param_1);
  pvVar3 = malloc(sVar2 << 2);
  local_5c = 0;
  while (local_5c < sVar2) {
    *(uint *)((long)pvVar3 + (long)local_5c * 4) = (int)param_1[local_5c] + 2U ^ 20;//22
    local_5c = local_5c + 1;
  }
  bVar1 = false;
  local_54 = 0;
  while (local_54 < sVar2) {
    if (*(int *)((long)pvVar3 + (long)local_54 * 4) != local_48[local_54]) {
      bVar1 = true;
    }
    local_54 = local_54 + 1;
  }
  //every char of param1 after the operation should be the same as local_48
  return !bVar1;
}

