import { createClient } from "@supabase/supabase-js";
//"Supabase를 사용하는  코드  createClient기능을 불러와 사용 


//우리가 env에서 설정한 것들을 넣는 작업
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL! 
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl , supabaseAnonKey)



//createClient(supabaseUrl , supabaseAnonKey) 설계도 함수를 실제로 사용해서, 주소(URL)와 키(Key)를 재료로 넣어 클라이언트 객체를 생성합니다.
//lib는 개발자에서 프로젝트에서 고통으로 사용되는 도구 함수나 설정을 모아두는 파일

//이렇게 해야 내가 숨긴 비밀번호를 안전하게 변수에 넣고 사용 가능 