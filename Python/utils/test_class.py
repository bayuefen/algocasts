# coding=utf-8

import os
import json
import inspect

from unittest import TestCase
from abc import abstractmethod

from algocasts.utils.data_structure import ListNode


class BaseTest(TestCase):
    @abstractmethod
    def generate(self):
        raise NotImplemented

    @abstractmethod
    def verify(self):
        raise NotImplemented

    def get_fixture(self, file_name):
        data_path = os.path.join(os.path.dirname(inspect.getfile(self.__class__)), 'fixtures', file_name)
        with open(data_path, 'r') as f:
            return json.loads(f.read())

    def get_fixtures(self, path):
        # the firture is the test case origin input data, can load by the function
        # the input format should be json
        for f in os.listdir(path):
            new_f = os.path.abspath(os.path.join(path,f))
            if os.path.isfile(new_f):
                return json.loads(new_f)
        # return json.loads(file)


class StringTest(BaseTest):
    def generate(self):
        pass

    def verify(self):
        pass

class LinkListTest(BaseTest):
    def generate(self, array):
        head = ListNode(0)
        tmp = head
        for i in array:
            tmp.set_value(i)
            new_node = ListNode(0)
            tmp.set_next(new_node)
            tmp = new_node
        return head

    def verify(self):
        pass


class TreeTest(BaseTest):
    def generate(self, array):
        pass

    def verify(self):
        pass

class GraphTest(BaseTest):
    pass


class StackTest(BaseTest):
    pass
