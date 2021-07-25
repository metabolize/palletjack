// Adapted from https://github.com/strongpauly/BetterSet, MIT License

export default class BetterSet<ElementType> extends Set<ElementType> {
  /**
   * Add all items in an iterable to this set.
   */
  addAll(iterable: Iterable<ElementType>): void {
    for (const item of iterable) {
      this.add(item)
    }
  }

  /**
   * Deletes all items from this set.
   */
  deleteAll(): void {
    this.forEach(item => {
      this.delete(item)
    })
  }

  /**
   * Returns a union of this set with another Set or iterable.
   */
  union<Other>(otherSet: Set<Other>): BetterSet<ElementType | Other> {
    const newSet = new BetterSet<ElementType | Other>(this)
    newSet.addAll(otherSet)
    return newSet
  }

  /**
   * Returns an intersection of this set with another Set.
   */
  intersection(otherSet: Set<unknown>): BetterSet<ElementType> {
    const newSet = new BetterSet<ElementType>()
    this.forEach(item => {
      if (otherSet.has(item)) {
        newSet.add(item)
      }
    })
    return newSet
  }

  /**
   * Returns a relative complement of this set with another,
   * i.e. all the items that are in this set, but not in the other.
   * A short hand for relativeComplement.
   */
  complement(otherSet: Set<ElementType>): BetterSet<ElementType> {
    return this.relativeComplement(otherSet)
  }

  /**
   * Returns a relative complement of this set with another,
   * i.e. all the items that are in this set, but not in the other.
   */
  relativeComplement(otherSet: Set<ElementType>): BetterSet<ElementType> {
    const newSet = new BetterSet<ElementType>()
    this.forEach(item => {
      if (!otherSet.has(item)) {
        newSet.add(item)
      }
    })
    return newSet
  }

  /**
   * Returns a symmetric difference, or disjunctive union, of the two sets,
   * i.e. all the items that were not in both sets.
   * Can be thought of as the negative intersection.
   * @deprecated Causes developer confusion.  Currently the symmetric difference,
   * but will be changed to relative complement in a future release.
   */
  difference(otherSet: Set<ElementType>): BetterSet<ElementType> {
    return this.disjunctiveUnion(otherSet)
  }

  /**
   * Returns a symmetric difference, or disjunctive union, of the two sets,
   * i.e. all the items that were not in both sets.
   * Can be thought of as the negative intersection.
   */
  disjunctiveUnion(otherSet: Set<ElementType>): BetterSet<ElementType> {
    const newSet = new BetterSet<ElementType>()
    // Union two sets first.
    const union = this.union(otherSet)
    union.forEach(item => {
      // Only add it to the new set if it doesn't exist in both.
      if (!(otherSet.has(item) && this.has(item))) {
        newSet.add(item)
      }
    })
    return newSet
  }

  /**
   * Returns whether this set and the otherSet contain all the same items and no extras.
   */
  equals(otherSet: Set<unknown>): boolean {
    if (this === otherSet) {
      return true
    } else if (
      !(otherSet instanceof BetterSet) ||
      this.size !== otherSet.size
    ) {
      return false
    } else {
      for (const value of this.values()) {
        if (!otherSet.has(value)) {
          return false
        }
      }
      return true
    }
  }

  /**
   * Convenience function turning this into an array.
   */
  asArray(): ElementType[] {
    return Array.from(this)
  }

  /**
   * Convenience function acting like Array.prototype.map.
   */
  map<Result, This>(
    callbackFn: (
      this: This,
      value: ElementType,
      index: number,
      array: ElementType[]
    ) => Result,
    thisArg?: This
  ): BetterSet<Result> {
    return new BetterSet(this.asArray().map(callbackFn, thisArg))
  }

  /**
   * Convenience function acting like Array.prototype.reduce.
   */
  reduce<Result>(
    callbackFn: (
      previousValue: Result,
      currentValue: ElementType,
      currentIndex: number,
      array: ElementType[]
    ) => Result,
    initialValue: Result
  ): Result {
    return this.asArray().reduce(callbackFn, initialValue)
  }
}
