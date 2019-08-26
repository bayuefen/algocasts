# coding=utf-8
# add algocasts path into python path with abspath

import os
import inspect
import unittest
import optparse
import traceback
import logging
import sys
sys.path.append(os.path.dirname(os.path.dirname(__file__)))
sys.path.append(os.path.dirname(os.path.dirname(os.path.dirname(__file__))))

log = logging.getLogger('algocasts_test')
problems_test = {}

def get_problem_tests(path):
    for f in os.listdir(path):
        c_path = os.path.abspath(os.path.join(path, f))

        if ((os.path.isfile(c_path) and
             len(f) > 3 and
             f[-3:] == '.py' and
             f[0:4] == 'test')):
            sys.path.append(os.path.dirname(c_path))
            sys.path.append(c_path)
            sys.path.append(os.path.dirname(os.path.dirname(c_path)))
            modname = f[:-3]
            try:
                # Import the module
                problems_test[modname] = __import__(modname,
                                                     globals(),
                                                     locals(),
                                                     ['*'])
            except Exception:
                print(sys.path)
                print("Failed to import module: %s. %s" % (
                    modname, traceback.format_exc()))
                continue

    for f in os.listdir(path):
        c_path = os.path.abspath(os.path.join(path, f))
        if os.path.isdir(c_path):
            get_problem_tests(c_path)


def print_helper():
    print "-p or --problem to run specify test on problem solution \n or -p all to run all problem test "

if __name__ == "__main__":
    print "Start run LeetCode cases..."
    parser = optparse.OptionParser()
    parser.add_option('-p',
                      "--problem",
                      dest="problem",
                      default="",
                      help="Run a single problem's unit tests")
    parser.add_option("-v",
                      "--verbose",
                      dest="verbose",
                      default=1,
                      action="count",
                      help="verbose")

    (options, args) = parser.parse_args()
    if not options.problem:
        print_helper()
        exit(1)

    e_problem = options.problem

    if e_problem == 'all':
        dPath = os.path.abspath(os.path.join(os.path.dirname(__file__),
                                             'src'))
    else:
        dPath = os.path.abspath(os.path.join(os.path.dirname(__file__),
                                             'src', 'LeetCode{}'.format(e_problem.zfill(4))))
    get_problem_tests(dPath)

    loader = unittest.TestLoader()
    tests = []

    for test in problems_test:
        for name, c in inspect.getmembers(problems_test[test],
                                          inspect.isclass):
            if not issubclass(c, unittest.TestCase):
                continue
            tests.append(loader.loadTestsFromTestCase(c))

    suite = unittest.TestSuite(tests)

    results = unittest.TextTestRunner(verbosity=options.verbose).run(suite)

    results = str(results)
    results = results.replace('>', '').split()[1:]
    resobj = {}
    for result in results:
        result = result.split('=')
        resobj[result[0]] = int(result[1])
    if resobj['failures'] > 0:
        sys.exit(1)
    if resobj['errors'] > 0:
        sys.exit(2)
    sys.exit(0)