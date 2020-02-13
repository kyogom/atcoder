
lineIndex = 0
def input(): 
	global lineIndex
	txt = """
5 5
-100000000 -100000000
-100000000 100000000
100000000 -100000000
100000000 100000000
0 0
0 0
100000000 100000000
100000000 -100000000
-100000000 100000000
-100000000 -100000000
	""".strip()
	result = txt.split('\n')[lineIndex]
	lineIndex += 1
	return result
import numpy as np
N, M = map(int, input().split(' '))

Ns = [list(map(int, input().split())) for i in range(N)]
Ms = [list(map(int, input().split())) for i in range(M)]
print(Ms)
for a, b in Ns:
	dists = []
	for c, d in Ms:
		dists.append(abs(a - c) + abs(b - d))
	print(np.argmin(dists) + 1)
	