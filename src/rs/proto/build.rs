
use std::io::Result;
fn main() -> Result<()> {

    protobuf_codegen::Codegen::new()
        .include("src")
        .inputs(["src/def.proto","src/gameconfig.proto","src/gameconfignew.proto","src/pkt_def.proto","src/client.proto"])
        .cargo_out_dir("rust_protobuf_protos")
        .run_from_script();

    prost_build::Config::new()
        .compile_protos(&["src/def.proto","src/gameconfig.proto","src/gameconfignew.proto","src/pkt_def.proto","src/client.proto"], &["src"])?;
        Ok(())
}

