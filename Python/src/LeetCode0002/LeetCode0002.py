# coding=utf-8

from utils.data_structure import ListNode

class Solution(object):
    def addTwoNumbers(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        pointer1 = l1
        pointer2 = l2
        carry = 0
        dummy = ListNode(0)
        p = dummy
        while pointer1 or pointer2 or carry:
            sum_val = carry
            if pointer1:
                sum_val += pointer1.val
                pointer1 = pointer1.next
            if pointer2:
                sum_val += pointer2.val
                pointer2 = pointer2.next
            p.next = ListNode(sum_val % 10)
            p = p.next
            carry = sum_val / 10
        return dummy.next
