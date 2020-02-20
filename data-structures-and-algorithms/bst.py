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

    def inorder_dfs(self, node, arr):
        bst_arr = arr
        if node:
            self.inorder_dfs(node.left, bst_arr)
            print(node.value, end=' ')
            bst_arr.append(node.value)
            self.inorder_dfs(node.right, bst_arr)
        return bst_arr

    def postorder_dfs(self, node):
        if node:
            self.postorder_dfs(node.left)
            self.postorder_dfs(node.right)
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

    def bfs_line_by_line(self, node):
        arr1 = []
        arr2 = []
        arr1.append(node)
        from_left = False

        while ((len(arr1) > 0) or (len(arr2))):
            if len(arr1) > 0:
                current = arr1.pop(0)
                print(current.value, end=' ')
                if current.left:
                    arr2.append(current.left)
                if current.right:
                    arr2.append(current.right)
            else:
                print('$', end=' ')
                if (from_left):
                    arr1 = arr1 + arr2[::-1]
                else:
                    arr1 = arr1 + arr2
                arr2 = []
                if from_left:
                    from_left = False
                else:
                    from_left = True

    def isBST(self, node):
        is_bst = 0
        bst_arr = self.inorder_dfs(node, [])
        print(bst_arr)
        i = 0
        min = bst_arr[0]
        while(i < len(bst_arr)):
            if(bst_arr[i] < min):
                is_bst = 0
                break
            else:
                min = bst_arr[i]
                is_bst = 1
            i += 1

        set_bst = set(bst_arr)
        if(len(bst_arr) != len(set_bst)):
            is_bst = 0

        return is_bst

    def countLeaves(self, root):
        arr = []
        count = 0

        if root is None:
            return count

        arr.append(root)

        while len(arr):
            current = arr.pop(0)
            print(current.value)
            if current.left:
                arr.append(current.left)
            if current.right:
                arr.append(current.right)
            if current.left is None and current.right is None:
                count += 1
        return count








tree = BinaryTreeSearch(1)
tree.root.left = Node(2)
tree.root.right = Node(3)
tree.root.left.left = Node(4)
tree.root.left.right = Node(5)
tree.root.right.left = Node(6)
tree.root.right.right = Node(7)

tree1 = BinaryTreeSearch(1)
tree1.root.right = Node(2)
tree1.root.right.right = Node(3)
tree1.root.right.right.right = Node(4)
tree1.root.right.right.right.right = Node(5)
tree1.root.right.right.right.right.right = Node(6)
tree1.root.right.right.right.right.right.right = Node(7)
tree1.root.right.right.right.right.right.right.left = Node(8)


print("PRE DFS")
print(tree.preorder_dfs(tree.root))
print("===========")
print("IN DFS")
print(tree.inorder_dfs(tree1.root, []))
print("===========")
print("POST DFS")
print(tree.postorder_dfs(tree.root))
print("===========")
print("BFS")
print(tree.bfs(tree.root))
print("===========")
print("BFS Line By Line")
print(tree.bfs_line_by_line(tree.root))
print("===========")
print("Check for BST")
print(tree.isBST(tree1.root))
print("===========")
print("Count Leaves in Binary Tree")
print(tree.countLeaves(tree.root))
print("===========")
# 1 $ 2 3 $ 4 5 6 7
