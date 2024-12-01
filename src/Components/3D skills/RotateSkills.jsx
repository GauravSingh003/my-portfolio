import Rotation from "./Rotation";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import { Bloom, EffectComposer } from '@react-three/postprocessing';

const RotateSkills = () => {
    return (
        <div className='h-[70vh] w-full relative' id="three_main">
            <Canvas flat>
                <ambientLight intensity={2.5} />
                <pointLight position={[5, 5, 5]} />

                <OrbitControls />
                <Rotation />
                <EffectComposer>
                    <Bloom
                        intensity={12}
                        luminanceThreshold={0.9}
                        luminanceSmoothing={0.025} 
                        mipmapBlur 
                    />
                </EffectComposer>
            </Canvas>
        </div>
    );
};

export default RotateSkills;