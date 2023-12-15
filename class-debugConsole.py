def addPy(a, b):
  if(type(a) != int or type(b) != int):
    raise TypeError('a and b must be integers')
  return a + b

print(addPy(1, 2))
print(addPy('1', '2')) # TypeError : a and b must be integers