class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def printlist(self):
        current = self.head
        while current:
            print (current.data)
            current = current.next

    def addNodeAtStart(self, new_data):
        new_node = Node(new_data)
        new_node.next = self.head
        self.head = new_node

    def addNodeAtEnd(self, new_data):
        new_node = Node(new_data)
        if self.head is None:
            self.head = new_node
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node

    def addNodeAtMiddle(self, mid_ref, new_data):
        new_node = Node(new_data)
        if self.head is None:
            self.head = new_node
            return
        count = 0
        current = self.head
        while current:
            count += 1
            if count == mid_ref + 1:
                new_node.next = current.next
                current.next = new_node
                return
            current = current.next

    #find middle of a linked list
    def findMidNode(self):
        single = self.head
        double = self.head
        if double:
            while (double is not None and double.next is not None):
                single = single.next
                double = double.next.next
            print(single.data)

    # TODO
    # Delete without head pointer
    # def deleteNode(self, ref_to_delete):
    #     current = ref_to_delete.next
    #     ref_to_delete.data = current.data
    #     ref_to_delete.next = current.next








list1 = LinkedList()
# list1.printlist()
list1.addNodeAtStart(1)
# list1.printlist()
# print("=============")
list1.addNodeAtStart(2)
# list1.printlist()
# print("=============")
list1.addNodeAtEnd(3)
# list1.printlist()
# print("=============")
list1.addNodeAtEnd(4)
# list1.printlist()
# print("=============")
list1.addNodeAtMiddle(1, 7)
# list1.printlist()
# print("=============")
# list1.findMidNode()
# print("=============")
list1.addNodeAtEnd(6)
list1.printlist()
# print("=============")
# list1.findMidNode()
# print("=============")
# list1.deleteNode(3)
# list1.printlist()
# print("=============")

