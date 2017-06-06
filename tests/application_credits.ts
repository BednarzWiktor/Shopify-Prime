import * as Prime from '../';
import {
    AsyncTest,
    IgnoreTest,
    TestFixture,
    Timeout
    } from 'alsatian';
import { Config, Expect } from './_utils';

@TestFixture("Application Credits")
export class ApplicationCreditTests {
    @AsyncTest("Creates an application credit")
    @IgnoreTest("Cannot be tested with a private app.")
    public async Test1() { }

    @AsyncTest("Gets an application credit")
    @IgnoreTest("Cannot be tested with a private app.")
    public async Test2() { }

    @AsyncTest("Lists application credits")
    @IgnoreTest("Cannot be tested with a private app.")
    public async Test3() { }
}