import test from 'ava';
import minPrefixLength from '.';

test('Test minPrefixLength', t => {
    t.is(minPrefixLength(8), 28, '8 Hosts, need 10 ips');
    t.is(minPrefixLength(0), 32, 'No Hosts');
    t.is(minPrefixLength(1), 30, '1 Host, need 3 ips')
});
