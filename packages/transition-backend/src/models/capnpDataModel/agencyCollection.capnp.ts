/* tslint:disable */

/**
 * This file has been automatically generated by the [capnpc-ts utility](https://github.com/jdiaz5513/capnp-ts).
 */

import * as capnp from 'capnp-ts';
import { ObjectSize as __O, Struct as __S } from 'capnp-ts';
export const _capnpFileId = 'da2c404d77413fd7';
export class Agency extends __S {
    static readonly _capnp = { displayName: 'Agency', id: 'a7fac5bdf8e50062', size: new __O(8, 8) };
    getUuid(): string {
        return __S.getText(0, this);
    }
    setUuid(value: string): void {
        __S.setText(0, value, this);
    }
    getAcronym(): string {
        return __S.getText(1, this);
    }
    setAcronym(value: string): void {
        __S.setText(1, value, this);
    }
    getName(): string {
        return __S.getText(2, this);
    }
    setName(value: string): void {
        __S.setText(2, value, this);
    }
    getInternalId(): string {
        return __S.getText(3, this);
    }
    setInternalId(value: string): void {
        __S.setText(3, value, this);
    }
    getColor(): string {
        return __S.getText(4, this);
    }
    setColor(value: string): void {
        __S.setText(4, value, this);
    }
    getIsEnabled(): number {
        return __S.getInt8(0, this);
    }
    setIsEnabled(value: number): void {
        __S.setInt8(0, value, this);
    }
    getDescription(): string {
        return __S.getText(5, this);
    }
    setDescription(value: string): void {
        __S.setText(5, value, this);
    }
    getData(): string {
        return __S.getText(6, this);
    }
    setData(value: string): void {
        __S.setText(6, value, this);
    }
    getIsFrozen(): number {
        return __S.getInt8(1, this);
    }
    setIsFrozen(value: number): void {
        __S.setInt8(1, value, this);
    }
    getSimulationUuid(): string {
        return __S.getText(7, this);
    }
    setSimulationUuid(value: string): void {
        __S.setText(7, value, this);
    }
    toString(): string {
        return 'Agency_' + super.toString();
    }
}
export class AgencyCollection extends __S {
    static readonly _capnp = { displayName: 'AgencyCollection', id: '95bc8edf88b9b4fe', size: new __O(0, 1) };
    static _Agencies: capnp.ListCtor<Agency>;
    adoptAgencies(value: capnp.Orphan<capnp.List<Agency>>): void {
        __S.adopt(value, __S.getPointer(0, this));
    }
    disownAgencies(): capnp.Orphan<capnp.List<Agency>> {
        return __S.disown(this.getAgencies());
    }
    getAgencies(): capnp.List<Agency> {
        return __S.getList(0, AgencyCollection._Agencies, this);
    }
    hasAgencies(): boolean {
        return !__S.isNull(__S.getPointer(0, this));
    }
    initAgencies(length: number): capnp.List<Agency> {
        return __S.initList(0, AgencyCollection._Agencies, length, this);
    }
    setAgencies(value: capnp.List<Agency>): void {
        __S.copyFrom(value, __S.getPointer(0, this));
    }
    toString(): string {
        return 'AgencyCollection_' + super.toString();
    }
}
AgencyCollection._Agencies = capnp.CompositeList(Agency);