"use strict";
/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/
var __imul = Math.imul;
var __fround = Math.fround;
var oSlot = 0; var nullArray = [null]; var nullObj = { d: nullArray, o: 0 };
function __Z7webMainv() {
}
function __Z7measurePN6client6StringEPNS_13EventListenerE(Larg0, Larg1) {
	var tmp0 = null;
	tmp0 = new Object();
	tmp0[Larg0] = Larg1;
	return tmp0;
}
function __ZN5Timer22getElapsedTimeAsMicSecEv(Larg0) {
	var tmp0 = null, L$poptgep4$poptgep$poptgepsqueezed = null, tmp2 = null, tmp3 = 0, tmp4 = 0, tmp5 = 0, tmp6 = 0;
	tmp0 = new Int32Array(2);
	L$poptgep4$poptgep$poptgepsqueezed = Larg0.a0;
	if ((Larg0.i1 & 255) !== 0) {
		__ZNSt6chrono12steady_clock3nowEv(tmp0, 0);
		L$poptgep4$poptgep$poptgepsqueezed[2] = tmp0[0] | 0;
		L$poptgep4$poptgep$poptgepsqueezed[3] = tmp0[1] | 0;
		Larg0.i1 = 0;
		tmp2 = L$poptgep4$poptgep$poptgepsqueezed;
	} else {
		tmp2 = L$poptgep4$poptgep$poptgepsqueezed;
	}
	tmp5 = tmp2[2] | 0;
	tmp6 = L$poptgep4$poptgep$poptgepsqueezed[3] | 0;
	tmp3 = L$poptgep4$poptgep$poptgepsqueezed[0] | 0;
	tmp4 = L$poptgep4$poptgep$poptgepsqueezed[1] | 0;
	___divti3(tmp0, 0, tmp5 - tmp3 | 0, (tmp6 - tmp4 | 0) + ((tmp5 >>> 0 < tmp3 >>> 0 ? 1 : 0) << 31 >> 31) | 0, 1000, 0);
	tmp5 = tmp0[1] | 0;
	tmp6 = tmp0[0] | 0;
	return (+(tmp5 | 0)) * 4294967296 + (+(tmp6 >>> 0));
}
function ___divti3(Larg0, Marg0, L$pval, L$p1$pval, L$pval1, L$p1$pval2) {
	var tmp0 = 0, tmp1 = 0, tmp2 = 0, tmp3 = 0, tmp4 = 0, tmp5 = 0, tmp6 = 0, tmp7 = 0, tmp8 = 0, tmp9 = 0, tmp10 = 0;
	if ((L$p1$pval | 0) < 0) {
		tmp0 = -L$pval | 0;
		tmp1 = (L$pval | 0) !== 0 ? L$p1$pval ^ -1 | 0 : -L$p1$pval | 0;
		tmp2 = 1;
	} else {
		tmp2 = 0;
		tmp1 = L$p1$pval;
		tmp0 = L$pval;
	}
	if ((L$p1$pval2 | 0) < 0) {
		tmp2 ^= 1;
		tmp3 = -L$pval1 | 0;
		tmp4 = (L$pval1 | 0) !== 0 ? L$p1$pval2 ^ -1 | 0 : -L$p1$pval2 | 0;
	} else {
		tmp4 = L$p1$pval2;
		tmp3 = L$pval1;
	}
	tmp5 = tmp3 >>> 0 < tmp0 >>> 0 ? 1 : 0;
	tmp6 = (tmp4 | 0) === (tmp1 | 0) ? 1 : 0;
	tmp7 = tmp4 >>> 0 < tmp1 >>> 0 ? 1 : 0;
	a: if ((tmp4 | 0) > -1) {
		if (!(tmp7)) {
			if (!(tmp5)) {
				tmp5 = 0;
				tmp6 = 1;
				break a;
			}
			if (!(tmp6)) {
				tmp5 = 0;
				tmp6 = 1;
				break a;
			}
		}
		tmp6 = 1;
		tmp5 = 0;
		while (1) {
			tmp4 = tmp3 >>> 31 | tmp4 << 1;
			tmp5 = tmp6 >>> 31 | tmp5 << 1;
			tmp3 <<= 1;
			tmp7 = tmp3 >>> 0 < tmp0 >>> 0 ? 1 : 0;
			tmp8 = (tmp4 | 0) === (tmp1 | 0) ? 1 : 0;
			tmp9 = tmp4 >>> 0 < tmp1 >>> 0 ? 1 : 0;
			tmp6 <<= 1;
			tmp10 = (tmp5 | tmp6 | 0) !== 0 ? 1 : 0;
			if ((tmp4 | 0) > -1) {
				if (!(tmp9)) {
					if (!(tmp7)) break a;
					if (!(tmp8)) break a;
				}
				if (tmp10) continue;
			}
			break;
		}
	} else {
		tmp5 = 0;
		tmp6 = 1;
	}
	if ((tmp5 | tmp6 | 0) !== 0) {
		tmp8 = 0;
		tmp7 = 0;
		while (1) {
			tmp9 = tmp0 >>> 0 >= tmp3 >>> 0 ? 1 : 0;
			tmp10 = (tmp1 | 0) === (tmp4 | 0) ? 1 : 0;
			a: {
				if (tmp1 >>> 0 <= tmp4 >>> 0) {
					if (!(tmp10)) break a;
					if (!(tmp9)) break a;
				}
				tmp1 = (tmp1 - tmp4 | 0) + ((tmp0 >>> 0 < tmp3 >>> 0 ? 1 : 0) << 31 >> 31) | 0;
				tmp0 = tmp0 - tmp3 | 0;
				tmp7 |= tmp5;
				tmp8 |= tmp6;
			}
			tmp6 = tmp6 >>> 1 | tmp5 << 31;
			tmp3 = tmp3 >>> 1 | tmp4 << 31;
			tmp5 >>>= 1;
			if ((tmp6 | tmp5 | 0) !== 0) {
				tmp4 >>>= 1;
				continue;
			}
			break;
		}
	} else {
		tmp7 = 0;
		tmp8 = 0;
	}
	if ((tmp2 | 0) !== 0) {
		tmp7 = (tmp8 | 0) !== 0 ? tmp7 ^ -1 | 0 : -tmp7 | 0;
		tmp8 = -tmp8 | 0;
	}
	Larg0[Marg0 + 1 | 0] = tmp7;
	Larg0[Marg0] = tmp8;
}
function __ZNSt6chrono12steady_clock3nowEv(Larg0, Marg0) {
	var tmp0 = -0., tmp1 = -0., tmp2 = 0, tmp3 = 0, tmp4 = 0, tmp5 = 0, LmergedArray = null, LmergedArrayo = 0, tmp7 = 0;
	tmp0 = +Date.now();
	tmp1 = tmp0 < 0 ? -tmp0 : tmp0;
	tmp5 = ~~(tmp1 * 2.3283064365386963E-10);
	LmergedArray = new Int32Array(4);
	LmergedArray[1] = tmp5;
	tmp7 = ~~(tmp1 % 4294967296);
	LmergedArray[0] = tmp7;
	LmergedArray[3] = (tmp7 | 0) !== 0 ? tmp5 ^ -1 | 0 : -tmp5 | 0;
	LmergedArray[2] = -tmp7 | 0;
	LmergedArrayo = tmp0 < 0 ? 2 : 0;
	LmergedArray = tmp0 < 0 ? LmergedArray : LmergedArray;
	tmp5 = LmergedArray[LmergedArrayo + 1 | 0] | 0;
	tmp7 = LmergedArray[LmergedArrayo] | 0;
	tmp2 = tmp7 >>> 16;
	tmp7 &= 65535;
	tmp3 = (__imul(tmp2, 16960) | 0) + (__imul(tmp7, 15) | 0) | 0;
	tmp4 = tmp3 << 16;
	tmp7 = __imul(tmp7, 16960) | 0;
	Larg0[Marg0] = tmp4 + tmp7 | 0;
	Larg0[Marg0 + 1 | 0] = (((__imul(tmp2, 15) | 0) + (__imul(tmp5, 1000000) | 0) | 0) + (tmp3 >>> 16) | 0) + (tmp4 >>> 0 > (tmp7 ^ -1) >>> 0 ? 1 : 0) | 0;
}
function __ZN5Timer19getElapsedTimeAsSecEv(Larg0) {
	var tmp0 = null, L$poptgep4$poptgep$poptgepsqueezed = null, tmp2 = null, tmp3 = 0, tmp4 = 0, tmp5 = 0, tmp6 = 0;
	tmp0 = new Int32Array(2);
	L$poptgep4$poptgep$poptgepsqueezed = Larg0.a0;
	if ((Larg0.i1 & 255) !== 0) {
		__ZNSt6chrono12steady_clock3nowEv(tmp0, 0);
		L$poptgep4$poptgep$poptgepsqueezed[2] = tmp0[0] | 0;
		L$poptgep4$poptgep$poptgepsqueezed[3] = tmp0[1] | 0;
		Larg0.i1 = 0;
		tmp2 = L$poptgep4$poptgep$poptgepsqueezed;
	} else {
		tmp2 = L$poptgep4$poptgep$poptgepsqueezed;
	}
	tmp5 = tmp2[2] | 0;
	tmp6 = L$poptgep4$poptgep$poptgepsqueezed[3] | 0;
	tmp3 = L$poptgep4$poptgep$poptgepsqueezed[0] | 0;
	tmp4 = L$poptgep4$poptgep$poptgepsqueezed[1] | 0;
	___divti3(tmp0, 0, tmp5 - tmp3 | 0, (tmp6 - tmp4 | 0) + ((tmp5 >>> 0 < tmp3 >>> 0 ? 1 : 0) << 31 >> 31) | 0, 1000000000, 0);
	tmp5 = tmp0[1] | 0;
	tmp6 = tmp0[0] | 0;
	return (+(tmp5 | 0)) * 4294967296 + (+(tmp6 >>> 0));
}
function __ZN5Timer18getElapsedTimeAsNsEv(Larg0) {
	var tmp0 = null, L$poptgep2$poptgep$poptgepsqueezed = null, tmp2 = null, tmp3 = 0, tmp4 = 0, tmp5 = 0, tmp6 = 0;
	tmp0 = new Int32Array(2);
	L$poptgep2$poptgep$poptgepsqueezed = Larg0.a0;
	if ((Larg0.i1 & 255) !== 0) {
		__ZNSt6chrono12steady_clock3nowEv(tmp0, 0);
		L$poptgep2$poptgep$poptgepsqueezed[2] = tmp0[0] | 0;
		L$poptgep2$poptgep$poptgepsqueezed[3] = tmp0[1] | 0;
		Larg0.i1 = 0;
		tmp2 = L$poptgep2$poptgep$poptgepsqueezed;
	} else {
		tmp2 = L$poptgep2$poptgep$poptgepsqueezed;
	}
	tmp3 = tmp2[2] | 0;
	tmp4 = L$poptgep2$poptgep$poptgepsqueezed[3] | 0;
	tmp5 = L$poptgep2$poptgep$poptgepsqueezed[0] | 0;
	tmp6 = L$poptgep2$poptgep$poptgepsqueezed[1] | 0;
	return (+((tmp4 - tmp6 | 0) + ((tmp3 >>> 0 < tmp5 >>> 0 ? 1 : 0) << 31 >> 31) | 0)) * 4294967296 + (+(tmp3 - tmp5 >>> 0));
}
function __ZN5Timer18getElapsedTimeAsMsEv(Larg0) {
	var tmp0 = null, L$poptgep4$poptgep$poptgepsqueezed = null, tmp2 = null, tmp3 = 0, tmp4 = 0, tmp5 = 0, tmp6 = 0;
	tmp0 = new Int32Array(2);
	L$poptgep4$poptgep$poptgepsqueezed = Larg0.a0;
	if ((Larg0.i1 & 255) !== 0) {
		__ZNSt6chrono12steady_clock3nowEv(tmp0, 0);
		L$poptgep4$poptgep$poptgepsqueezed[2] = tmp0[0] | 0;
		L$poptgep4$poptgep$poptgepsqueezed[3] = tmp0[1] | 0;
		Larg0.i1 = 0;
		tmp2 = L$poptgep4$poptgep$poptgepsqueezed;
	} else {
		tmp2 = L$poptgep4$poptgep$poptgepsqueezed;
	}
	tmp5 = tmp2[2] | 0;
	tmp6 = L$poptgep4$poptgep$poptgepsqueezed[3] | 0;
	tmp3 = L$poptgep4$poptgep$poptgepsqueezed[0] | 0;
	tmp4 = L$poptgep4$poptgep$poptgepsqueezed[1] | 0;
	___divti3(tmp0, 0, tmp5 - tmp3 | 0, (tmp6 - tmp4 | 0) + ((tmp5 >>> 0 < tmp3 >>> 0 ? 1 : 0) << 31 >> 31) | 0, 1000000, 0);
	tmp5 = tmp0[1] | 0;
	tmp6 = tmp0[0] | 0;
	return (+(tmp5 | 0)) * 4294967296 + (+(tmp6 >>> 0));
}
function __ZN5Timer4stopEv(Larg0) {
	var tmp0 = null, L$poptgep2$poptgep$poptgepsqueezed = null;
	tmp0 = new Int32Array(2);
	__ZNSt6chrono12steady_clock3nowEv(tmp0, 0);
	L$poptgep2$poptgep$poptgepsqueezed = Larg0.a0;
	L$poptgep2$poptgep$poptgepsqueezed[2] = tmp0[0] | 0;
	L$poptgep2$poptgep$poptgepsqueezed[3] = tmp0[1] | 0;
	Larg0.i1 = 0;
}
function __ZN5Timer5startEv(Larg0) {
	var tmp0 = null, L$poptgep2$poptgep$poptgepsqueezed = null;
	tmp0 = new Int32Array(2);
	__ZNSt6chrono12steady_clock3nowEv(tmp0, 0);
	L$poptgep2$poptgep$poptgepsqueezed = Larg0.a0;
	L$poptgep2$poptgep$poptgepsqueezed[0] = tmp0[0] | 0;
	L$poptgep2$poptgep$poptgepsqueezed[1] = tmp0[1] | 0;
	Larg0.i1 = 1;
}
function __ZN5TimerC1Ev(Larg0) {
	var L$poptgep$poptgep$poptgepsqueezed = null;
	L$poptgep$poptgep$poptgepsqueezed = Larg0.a0;
	L$poptgep$poptgep$poptgepsqueezed[1] = 0;
	L$poptgep$poptgep$poptgepsqueezed[0] = 0;
	L$poptgep$poptgep$poptgepsqueezed[3] = 0;
	L$poptgep$poptgep$poptgepsqueezed[2] = 0;
	Larg0.i1 = 0;
}
function Timer() {
	this.a0 = new Int32Array(4);
	this.i1 = 0;
	;
	this.d = [this];
	if (arguments.length === 1 && arguments[0] === undefined) {
		return;
	}
	__ZN5TimerC1Ev(this);
}
Timer.prototype.start = function () {
	return __ZN5Timer5startEv(this);
};
Timer.prototype.stop = function () {
	return __ZN5Timer4stopEv(this);
};
Timer.prototype.getElapsedTimeAsMs = function () {
	return __ZN5Timer18getElapsedTimeAsMsEv(this);
};
Timer.prototype.getElapsedTimeAsNs = function () {
	return __ZN5Timer18getElapsedTimeAsNsEv(this);
};
Timer.prototype.getElapsedTimeAsSec = function () {
	return __ZN5Timer19getElapsedTimeAsSecEv(this);
};
Timer.prototype.getElapsedTimeAsMicSec = function () {
	return __ZN5Timer22getElapsedTimeAsMicSecEv(this);
};
var measure = __Z7measurePN6client6StringEPNS_13EventListenerE;
measure.promise =
	Timer.promise =
	Promise.resolve();
__Z7webMainv();
