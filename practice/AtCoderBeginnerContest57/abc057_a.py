lineIndex = 0
def input(): 
	global lineIndex
	txt = """
22 5
	""".strip()
	result = txt.split('\n')[lineIndex]
	lineIndex += 1
	return result

A, B = map(int, input().split(' '))
print(A + B - 24 if A + B >= 24 else A + B)