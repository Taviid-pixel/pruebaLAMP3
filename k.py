def procesar_caso(a, b, c):
    ingredientes = [a, b, c]
    h3 = min(ingredientes)
    ingredientes = [x - h3 for x in ingredientes]
    h2 = 0
    while True:
        
        ingredientes.sort(reverse=True)
        if ingredientes[1] > 0:
            ingredientes[0] -= 1
            ingredientes[1] -= 1
            h2 += 1
        else:
            break
    h1 = sum(ingredientes)
    return h3, h2, h1
n = int(input())
xyz=[]
for _ in range(n):
    a, b, c = map(int, input().split())
    resultado = procesar_caso(a, b, c)
    xyz.append(resultado)
hhh=0
print(*xyz[hhh])
aaa=n-1
for _ in range(aaa):
    hhh+=1
    print(*xyz[hhh])
    
    