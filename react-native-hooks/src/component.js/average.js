import React, { useState, useMemo } from 'react';
import { View, Text, Button } from 'react-native';

function AverageCalculator() {
    const [numbers, setNumbers] = useState([10, 20, 30, 40, 50]);
    const [extra, setExtra] = useState(0);

    // numbers 배열이 변경될 때만 평균을 재계산
    //평균을 계산하는 로직(USEmEMO로 메모이제이션)
    const average = useMemo(() => {
        console.log("Calculating average...");
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
        return sum / numbers.length;
    }, [numbers]); //  NUMBERS에 변화가 생길때마다 재실행이 된다.

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 18 }}>Average: {average}</Text>
            {/* 배열에 랜덤 숫자를 추가하는 버튼 */}
            <Button title="Add Number" onPress={() => setNumbers([...numbers, Math.floor(Math.random() * 100)])} />
            <Button title="Change Extra State" onPress={() => setExtra(extra + 1)} />
                {/* 평균과는 상관없는 상태 변경 버튼 */}
            <Text style={{ fontSize: 18, marginTop: 10 }}>Extra Value (unrelated): {extra}</Text>
        </View>
    );
}

export default AverageCalculator;
// 여기서는 numbers 배열이 변경될 때만 average가 다시 계산된다.
// extra 상태는 average 계산에 영향을 주지 않기 때문에, 불필요한 재계산을 방지하고 성능을 높일 수 있다.