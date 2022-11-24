/* tslint:disable */

/**
 * This file has been automatically generated by the [capnpc-ts utility](https://github.com/jdiaz5513/capnp-ts).
 */

import * as capnp from 'capnp-ts';
import { ObjectSize as __O, Struct as __S } from 'capnp-ts';
export const _capnpFileId = 'a6587c9eb014ab3e';
export enum Household_IncomeLevelGroup {
    NONE,
    VERY_LOW,
    LOW,
    MEDIUM,
    HIGH,
    VERY_HIGH,
    UNKNOWN
}
export enum Household_Category {
    NONE,
    SINGLE_PERSON,
    COUPLE,
    MONOPARENTAL_FAMILY,
    BIPARENTAL_FAMILY,
    OTHER,
    UNKNOWN
}
export class Household extends __S {
    static readonly IncomeLevelGroup = Household_IncomeLevelGroup;
    static readonly Category = Household_Category;
    static readonly _capnp = { displayName: 'Household', id: 'f1856a7a7d8fd18f', size: new __O(32, 7) };
    getUuid(): string {
        return __S.getText(0, this);
    }
    setUuid(value: string): void {
        __S.setText(0, value, this);
    }
    getDataSourceUuid(): string {
        return __S.getText(1, this);
    }
    setDataSourceUuid(value: string): void {
        __S.setText(1, value, this);
    }
    getId(): number {
        return __S.getUint32(0, this);
    }
    setId(value: number): void {
        __S.setUint32(0, value, this);
    }
    getExpansionFactor(): number {
        return __S.getFloat32(4, this);
    }
    setExpansionFactor(value: number): void {
        __S.setFloat32(4, value, this);
    }
    getSize(): number {
        return __S.getInt8(8, this);
    }
    setSize(value: number): void {
        __S.setInt8(8, value, this);
    }
    getCarNumber(): number {
        return __S.getInt8(9, this);
    }
    setCarNumber(value: number): void {
        __S.setInt8(9, value, this);
    }
    getIncomeLevel(): number {
        return __S.getInt32(12, this);
    }
    setIncomeLevel(value: number): void {
        __S.setInt32(12, value, this);
    }
    getIncomeLevelGroup(): Household_IncomeLevelGroup {
        return __S.getUint16(10, this);
    }
    setIncomeLevelGroup(value: Household_IncomeLevelGroup): void {
        __S.setUint16(10, value, this);
    }
    getCategory(): Household_Category {
        return __S.getUint16(16, this);
    }
    setCategory(value: Household_Category): void {
        __S.setUint16(16, value, this);
    }
    getHomeLatitude(): number {
        return __S.getInt32(20, this);
    }
    setHomeLatitude(value: number): void {
        __S.setInt32(20, value, this);
    }
    getHomeLongitude(): number {
        return __S.getInt32(24, this);
    }
    setHomeLongitude(value: number): void {
        __S.setInt32(24, value, this);
    }
    adoptHomeNodesUuids(value: capnp.Orphan<capnp.List<string>>): void {
        __S.adopt(value, __S.getPointer(2, this));
    }
    disownHomeNodesUuids(): capnp.Orphan<capnp.List<string>> {
        return __S.disown(this.getHomeNodesUuids());
    }
    getHomeNodesUuids(): capnp.List<string> {
        return __S.getList(2, capnp.TextList, this);
    }
    hasHomeNodesUuids(): boolean {
        return !__S.isNull(__S.getPointer(2, this));
    }
    initHomeNodesUuids(length: number): capnp.List<string> {
        return __S.initList(2, capnp.TextList, length, this);
    }
    setHomeNodesUuids(value: capnp.List<string>): void {
        __S.copyFrom(value, __S.getPointer(2, this));
    }
    adoptHomeNodesTravelTimes(value: capnp.Orphan<capnp.List<number>>): void {
        __S.adopt(value, __S.getPointer(3, this));
    }
    disownHomeNodesTravelTimes(): capnp.Orphan<capnp.List<number>> {
        return __S.disown(this.getHomeNodesTravelTimes());
    }
    getHomeNodesTravelTimes(): capnp.List<number> {
        return __S.getList(3, capnp.Int16List, this);
    }
    hasHomeNodesTravelTimes(): boolean {
        return !__S.isNull(__S.getPointer(3, this));
    }
    initHomeNodesTravelTimes(length: number): capnp.List<number> {
        return __S.initList(3, capnp.Int16List, length, this);
    }
    setHomeNodesTravelTimes(value: capnp.List<number>): void {
        __S.copyFrom(value, __S.getPointer(3, this));
    }
    adoptHomeNodesDistances(value: capnp.Orphan<capnp.List<number>>): void {
        __S.adopt(value, __S.getPointer(4, this));
    }
    disownHomeNodesDistances(): capnp.Orphan<capnp.List<number>> {
        return __S.disown(this.getHomeNodesDistances());
    }
    getHomeNodesDistances(): capnp.List<number> {
        return __S.getList(4, capnp.Int16List, this);
    }
    hasHomeNodesDistances(): boolean {
        return !__S.isNull(__S.getPointer(4, this));
    }
    initHomeNodesDistances(length: number): capnp.List<number> {
        return __S.initList(4, capnp.Int16List, length, this);
    }
    setHomeNodesDistances(value: capnp.List<number>): void {
        __S.copyFrom(value, __S.getPointer(4, this));
    }
    getInternalId(): string {
        return __S.getText(5, this);
    }
    setInternalId(value: string): void {
        __S.setText(5, value, this);
    }
    getData(): string {
        return __S.getText(6, this);
    }
    setData(value: string): void {
        __S.setText(6, value, this);
    }
    getIsFrozen(): number {
        return __S.getInt8(18, this);
    }
    setIsFrozen(value: number): void {
        __S.setInt8(18, value, this);
    }
    toString(): string {
        return 'Household_' + super.toString();
    }
}