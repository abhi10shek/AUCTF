//secret = aQLpavpKQcCVpfcg

void encrypt(char *__block,int __edflag)

{
  size_t sVar1;
  int local_20;
  
  local_20 = 0;
  while ((sVar1 = strlen(secret), (ulong)(long)local_20 < sVar1 &&
         (((int)__block[local_20] * 8 + 19) % 61 + 65 == (int)(char)secret[local_20]))) {
    local_20 = local_20 + 1;
  }
  return;
}


ulong main(void)

{
  int extraout_EAX;
  int __edflag;
  long in_FS_OFFSET;
  char local_38 [40];
  long local_10;
  
  local_10 = *(long *)(in_FS_OFFSET + 0x28);
  setvbuf(stdout,(char *)0x0,2,0);
  puts("Give me a key!");
  __edflag = 0x1e;
  fgets(local_38,0x1e,stdin);
  encrypt(local_38,__edflag);
  if (extraout_EAX == 0) {
    puts("That\'s not it!");
  }
  else {
    print_flag();
  }
  return (ulong)(extraout_EAX == 0);
}

