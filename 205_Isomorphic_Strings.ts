// 205_Isomorphic_Strings
main()
function main(){
    console.log( "Result : ", isIsomorphic("egg","add") );
    console.log( "Result : ", isIsomorphic2("egg","add") );
}

// Solution 1
function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length ){
        return false
    } 
    var sMap: Map<string, number[]> =  mapString(s);
    var tMap: Map<string, number[]> = mapString(t);
    for (let i = 0; i < s.length; i++) {
        // console.log("Charactor : ", s[i], t[i]);
        // console.log("Get Arr : ",sMap.get('' + s[i]),tMap.get('' + t[i]));
        var sArr: number[] = sMap.get('' + s[i])!;
        var tArr: number[] = tMap.get('' + t[i])!;
        var equals = (a: number[], b: number[]) => JSON.stringify(a) === JSON.stringify(b);
        if ( !equals(sArr, tArr) ) {
            return false;
        }
    }
    return true;
};

function mapString(str: string): Map<string, number[]> {
    var stringMapping = new Map<string, number[]>();
    for (let i = 0; i < str.length ; i++) {
        var arrPosition: number[]= [];
        if (stringMapping.has(str[i])) {
            arrPosition=stringMapping.get(str[i])!
        } else {
            arrPosition=[]
        }
        arrPosition.push(i);
        stringMapping.set(str[i], arrPosition);
    }
    console.log("stringMapping: ", stringMapping)
    return stringMapping;
}

// Solution 2
function isIsomorphic2(s: string, t: string): boolean {
    if (s.length !== t.length ){
        return false
    } 
    var sMap: Map<string, number> =  new Map<string, number>;
    var tMap: Map<string, number> =  new Map<string, number>;
    // Checking position
    var sCh: number = -1;
    var tCh: number = -1;
    for (let i = 0; i < s.length ; i++) {
        // S checking
        if (sMap.has(s[i])) {
            sCh = sMap.get(''+s[i])!;
        } else {
            sMap.set(s[i],i);
            sCh = i;
        }
        // T checking
        if (tMap.has(t[i])) {
            tCh = tMap.get(''+t[i])!;
        } else {
            tMap.set(t[i],i);
            tCh = i;
        }
        // Compare value
        if (tCh !== sCh) {
            return false;
        }
    }
    
    return true;
};