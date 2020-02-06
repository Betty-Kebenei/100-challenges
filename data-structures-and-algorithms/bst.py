class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinaryTreeSearch:
    def __init__(self, root):
        self.root = Node(root)

    def preorder_dfs(self, node):
        if node:
            print(node.value, end=' ')
            self.preorder_dfs(node.left)
            self.preorder_dfs(node.right)

    def inorder_dfs(self, node):
        if node:
            self.preorder_dfs(node.left)
            print(node.value, end=' ')
            self.preorder_dfs(node.right)

    def postorder_dfs(self, node):
        if node:
            self.preorder_dfs(node.left)
            self.preorder_dfs(node.right)
            print(node.value, end=' ')

    def bfs(self, node):
        arr = []
        arr.append(node)

        while len(arr):
            current = arr.pop(0)
            print(current.value, end=' ')
            if current.left:
                arr.append(current.left)
            if current.right:
                arr.append(current.right)







tree = BinaryTreeSearch(1)
tree.root.left = Node(2)
tree.root.right = Node(3)
tree.root.left.left = Node(4)
tree.root.left.right = Node(5)
tree.root.right.left = Node(6)
tree.root.right.right = Node(7)


print("PRE DFS")
print(tree.preorder_dfs(tree.root))
print("===========")
print("IN DFS")
print(tree.inorder_dfs(tree.root))
print("===========")
print("POST DFS")
print(tree.postorder_dfs(tree.root))
print("===========")
print("BFS")
print(tree.bfs(tree.root))
print("===========")
