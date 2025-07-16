function getValue<K,V>(key: K, value1: V, value2: V): V {
  if(key)
    return value1;
  return value2;
}

getValue(1, "AP", "PA");