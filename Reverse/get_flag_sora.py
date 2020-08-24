s="aQLpavpKQcCVpfcg"
m=[]
for x in s:
    m.append(ord(x)-65)
print(m)

j=0
ans=[]

while(True):
    if(j>15):
        break
    for i in range(1,128):
        # print(i)
        # print((i*8+19)%61)
        if(j>15):
            break
        if (i*8+19)%61 == m[j]:
            print(i,j)
            j=j+1
            ans.append(chr(i))
            print(ans)
            i=1
print("".join(ans))